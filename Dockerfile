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

# Accept build arguments from CapRover.
# ONLY public NEXT_PUBLIC_* values belong here: they are inlined into the
# client bundle during `next build` and are public by design.
#
# Server-only secrets (RECAPTCHA_SECRET_KEY, EMAILJS_PRIVATE_KEY, BOL_*,
# DATABASE_URL, JWT_SECRET, ADMIN_PASSWORD_HASH) are deliberately NOT declared
# as ARG/ENV here. They are read at runtime and injected by CapRover as the
# app's Environmental Variables, so they never get baked into image layers.
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

# Limit Node.js memory to prevent OOM kills during build
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm run build

# DevDependencies + build-cache weggooien. Houdt prod-deps over, inclusief
# sharp (transitieve dep van next voor image-optimalisatie).
RUN npm prune --omit=dev && rm -rf .next/cache

# ---- Runner: schone image zonder compilers ----
FROM node:20-alpine AS runner
# vips = RUNTIME-lib voor sharp (next/image optimalisatie); geen compilers
RUN apk add --no-cache tzdata vips

ENV TZ=Europe/Amsterdam
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone

WORKDIR /app

# Alles uit de builder (geprunede node_modules incl. sharp, .next, broncode,
# data-defaults, start.sh) — niets ontbreekt, runtime-gedrag identiek
# (nog steeds `next start`, zelfde image-optimalisatie).
COPY --from=builder /app ./

EXPOSE 3000
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Persistent data volume - survives container restarts and deploys
VOLUME /app/data

RUN chmod +x /app/start.sh

CMD [ "/app/start.sh" ]
