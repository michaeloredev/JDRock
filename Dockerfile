# Built by .github/workflows/deploy.yml and pushed to GHCR; the droplet only pulls it.
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:22-alpine AS runner
LABEL org.opencontainers.image.source=https://github.com/michaeloredev/JDRock
WORKDIR /app
ENV NODE_ENV=production
# Docker sets HOSTNAME to the container id, which the standalone server would bind to
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# next.config.mjs uses distDir "build" + output "standalone"
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/build/standalone ./
COPY --from=builder --chown=node:node /app/build/static ./build/static

USER node
EXPOSE 3000
CMD ["node", "server.js"]
