# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Marketing site for J.D. Rock Custom Home Improvements (jdrock.com), a Frederick, MD contractor. Next.js 16 App Router, React 19, Tailwind 3, plain JavaScript (no TypeScript).

## Commands

- `npm run dev` — dev server (Turbopack) on :3000
- `npm run build` — production build; this is the main correctness check
- `npm start` — serve the production build

There are no tests. `npm run lint` is broken: Next 16 removed `next lint` (and `eslint-config-next` is still 15.x).

`next.config.mjs` sets `distDir: "build"`, so output goes to `build/` (dev uses `build/dev/`), not `.next/`. Only one `next dev` can run per checkout because of the lock in `build/dev/lock`; `next build` can run alongside it.

## Architecture

**Content lives in `lib/`, not in pages.** Pages render data from these modules:
- `lib/site.js` — business name, phone (`phone`/`phoneHref`), motto, service area, warranty, domain, `reviewPath`, and `navLinks` (used by both Header and Footer). Change business details here, not in components.
- `lib/services.js` — services with react-icons icon, short `summary` (home page cards) and full `description` (Services page).
- `lib/testimonials.js` — customer reviews plus `featuredTestimonialIds` for the home page. Keep reviewers' names as written (owner's decision, even though they mention "Jon"/"Chris").
- `lib/gallery.js` — photos grouped by project with alt text; the Gallery lightbox steps through all projects in order.

**Layout shell** (`app/layout.js`): sticky `Header` (client component: active-link state, mobile menu) → `<main>` → `Footer`. The mountain logo `public/images/Mountain.svg` has the same fill as `brand-700`, so the footer's mountain appears to rise out of the green band. `app/template.jsx` wraps every page in a framer-motion fade/slide-in.

**Shared UI** in `components/ui/`: `Section` (tones: default/muted/brand, inner `max-w-6xl` container; put narrower widths on an inner element, not `innerClassName`), `PageHeader`, `Card`, `Button`, `CallToAction`. `Button` uses `next/link` only for internal paths; `tel:`, external URLs, and `target="_blank"` links render a plain `<a>` (required for `/review`, which is a redirect, not a page).

**Theme** (`tailwind.config.js`): `brand-*` green scale (`#005524` = `brand-700`), `accent` amber for CTAs (use dark `text-accent-ink` on it), fonts `font-heading` (Arvo), `font-display` (Matrix, logo only), `font-sans` (Geist). Arvo/Matrix load from Adobe Typekit via the `<link>` in `layout.js`.

**Metadata**: root `layout.js` sets `metadataBase` and a `%s | J.D. Rock…` title template; each page exports its own `metadata`. Pages needing client state (Gallery, ExpandableQuote) keep `page.jsx` as a server component and import a client component, so metadata still works.

**Contact form**: `components/ContactForm.jsx` (react-hook-form + axios) POSTs to `app/api/contact/route.js`, which validates, HTML-escapes input, and sends via nodemailer over Gmail SMTP (port 587). Env vars in `.env.local`: `EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASS` (must be a Google App Password), `EMAIL_TO`. The form is used on both `/` and `/contact`.

**Google reviews**: `/review` is a 307 redirect defined in `next.config.mjs` (`GOOGLE_REVIEW_URL`) — the only place the Google URL lives. Site links and printed material use `jdrock.com/review`.

**Images**: gallery photos are `public/gall*.jpg`, served through `next/image`. Resize new photos to ≤2000px on the long edge before committing (`sharp` is available in `node_modules`); originals from phones are 4–11MB.

## Verifying UI changes

Headless Chrome barely advances framer-motion, so screenshots show page content stuck faded/offset by the `template.jsx` animation. To screenshot, temporarily replace `app/template.jsx` with a pass-through (`return children;`) and restore it afterwards (`git checkout app/template.jsx`). `google-chrome --headless=new --screenshot` is available; for interactions (e.g. the gallery lightbox), drive Chrome via `--remote-debugging-port` from `node --experimental-websocket` (Node 20).

## Deployment

Pushing to `main` deploys (`.github/workflows/deploy.yml`): Actions builds the root `Dockerfile` (Next `output: "standalone"`) and pushes `ghcr.io/michaeloredev/jdrock:latest`, then SSHes to the droplet (`159.203.173.214`, user `deploy`), copies `deploy/docker-compose.yml` + `deploy/Caddyfile` into `/srv/jdrock`, and runs `docker compose pull app && up -d`. Caddy in the same compose project terminates TLS (certs in the `jdrock_caddy_data` volume — keep the compose project name `jdrock`). The droplet's `/srv/jdrock/.env.production` holds the `EMAIL_*` vars and is never in the repo. Secrets: `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_HOST`. Re-deploy without a push via the workflow's "Run workflow" button. `scripts/release.sh [feature/branch]` does a full release: merges the branch into develop, runs `npm run build`, asks to confirm, merges develop into main, pushes over SSH (the gh token lacks `workflow` scope), and watches the deploy. Test the image locally with `docker build -t jdrock-test . && docker run --rm -p 3999:3000 jdrock-test`.

## Git workflow

Branches: `feature/*` → merged with `--no-ff` into `develop` → `main` (release). Git has no HTTPS credential helper configured; push with `git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push origin <branch>` (or the user can run `gh auth setup-git` once).
