# ---- Builder: installeert alles + bouwt (wordt weggegooid) ----
FROM node:20-alpine AS builder
RUN apk add --no-cache tzdata
RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

WORKDIR /app

# Deps eerst voor betere layer-caching
COPY package*.json ./
RUN npm ci

# Rest van de broncode
COPY . .

# Accept build arguments from CapRover (public NEXT_PUBLIC_* only; secrets
# worden runtime door CapRover geïnjecteerd, niet in image-layers).
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm run build

# node_modules weggooien zodat de runner ze vers en prod-only herinstalleert
# (nodig voor de juiste sharp ARM64-binary; prune sloopt die).
RUN rm -rf node_modules .next/cache .next/standalone

# ---- Runner: schone image zonder compilers ----
FROM node:20-alpine AS runner
# vips = runtime-lib voor sharp (next/image)
RUN apk add --no-cache tzdata vips

ENV TZ=Europe/Amsterdam
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone

WORKDIR /app

# App-bestanden (zonder node_modules, incl. data-defaults + start.sh) + verse
# productie-install. Runtime blijft identiek: `next start` via start.sh.
COPY --from=builder /app ./
RUN npm ci --omit=dev

EXPOSE 3000
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Persistent data volume - survives container restarts and deploys
VOLUME /app/data

RUN chmod +x /app/start.sh

CMD [ "/app/start.sh" ]
