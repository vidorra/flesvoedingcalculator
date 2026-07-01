FROM node:20-alpine
RUN apk add --no-cache tzdata
RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

ENV TZ Europe/Amsterdam
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime
RUN echo ${TZ} > /etc/timezone

# copy contents of directory to /app/
WORKDIR /app
COPY . .

# install packages
RUN npm ci

# Accept build arguments from CapRover.
# ONLY public NEXT_PUBLIC_* values belong here: they are inlined into the
# client bundle during `next build` and are public by design.
#
# Server-only secrets (RECAPTCHA_SECRET_KEY, EMAILJS_PRIVATE_KEY, BOL_*,
# DATABASE_URL, JWT_SECRET, ADMIN_PASSWORD_HASH) are deliberately NOT declared
# as ARG/ENV here. They are read at runtime and injected by CapRover as the
# app's Environmental Variables, so they never get baked into image layers
# (which `docker history` can read back). `next build` does not need them
# (verified: build passes with them unset).
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Convert build arguments to environment variables for the build process
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Limit Node.js memory to prevent OOM kills during build
ENV NODE_OPTIONS="--max-old-space-size=1024"

# build the Next.js app with environment variables available
RUN npm run build

# run
EXPOSE 3000

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Persistent data volume - survives container restarts and deploys
VOLUME /app/data

# Copy and use startup script that seeds defaults before starting
RUN chmod +x /app/start.sh

CMD [ "/app/start.sh" ]