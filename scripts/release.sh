#!/usr/bin/env bash
# Release develop to main and watch the deploy to jdrock.com.
#
#   scripts/release.sh                     # release develop as-is
#   scripts/release.sh feature/some-thing  # merge that branch into develop first
#
# Pushes over SSH because the gh OAuth token lacks the `workflow` scope.
set -euo pipefail

SITE=https://jdrock.com
WORKFLOW=deploy.yml

cd "$(git rev-parse --show-toplevel)"
start_branch=$(git rev-parse --abbrev-ref HEAD)
trap 'git checkout -q "$start_branch" 2>/dev/null || true' EXIT

step() { printf '\n\033[1;32m==> %s\033[0m\n' "$*"; }
die() { printf '\033[1;31m%s\033[0m\n' "$*" >&2; exit 1; }

[ -z "$(git status --porcelain)" ] || die "Working tree is not clean; commit or stash first."

remote=$(gh repo view --json sshUrl -q .sshUrl)

step "Updating develop and main from GitHub"
git fetch -q origin
git checkout -q develop && git merge -q --ff-only origin/develop
git checkout -q main && git merge -q --ff-only origin/main

if [ $# -ge 1 ]; then
    feature=$1
    step "Merging $feature into develop"
    git checkout -q develop
    git merge --no-ff "$feature" -m "Merge branch '$feature' into develop"
fi

if [ -z "$(git log --oneline main..develop)" ]; then
    die "main already contains develop; nothing to release."
fi

step "Commits going live"
git log --oneline --no-merges main..develop

step "Checking the production build"
git checkout -q develop
npm run build >/dev/null || die "npm run build failed; nothing was pushed."

read -rp $'\nRelease these to jdrock.com? [y/N] ' answer
[ "$answer" = y ] || [ "$answer" = Y ] || die "Cancelled; nothing was pushed."

step "Merging develop into main and pushing"
git checkout -q main
git merge -q --no-ff develop -m "Merge branch 'develop'"
sha=$(git rev-parse HEAD)
git push -q "$remote" develop main

step "Waiting for the deploy run"
run_id=""
for _ in $(seq 1 12); do
    run_id=$(gh run list --workflow "$WORKFLOW" --commit "$sha" --limit 1 --json databaseId -q '.[0].databaseId')
    [ -n "$run_id" ] && break
    sleep 5
done
if [ -z "$run_id" ]; then
    echo "Push didn't start a run after 60s; starting one manually."
    gh workflow run "$WORKFLOW" --ref main
    for _ in $(seq 1 12); do
        run_id=$(gh run list --workflow "$WORKFLOW" --commit "$sha" --limit 1 --json databaseId -q '.[0].databaseId')
        [ -n "$run_id" ] && break
        sleep 5
    done
    [ -n "$run_id" ] || die "Couldn't find the deploy run; check the Actions tab."
fi
echo "Run: $(gh run view "$run_id" --json url -q .url)"

if ! gh run watch "$run_id" --exit-status --interval 10; then
    gh run view "$run_id" --log-failed | tail -20
    die "Deploy failed. main is pushed; fix and re-run from the Actions tab."
fi

step "Checking $SITE"
for path in / /services /gallery /contact /testimonials; do
    printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' "$SITE$path")" "$path"
done

step "Released $(git rev-parse --short "$sha") to $SITE"
