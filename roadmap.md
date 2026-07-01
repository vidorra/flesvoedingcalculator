# Flesvoedingcalculator — Improvement Roadmap

Findings from the code review of 2026-06-10. Ordered by priority. Check items off as they are fixed.

**Update 2026-06-10:** P0 security items fixed, jspdf critical bumped, project hygiene cleaned. Build verified passing after changes.

**Update 2026-07-01:** Second pass — API security headers, `GET /api/track-click` auth, the rate-limiter stub, and the CLAUDE.md → validator refactor are all done (details below). Build verified (81/81 pages) and `npm run lint:kennisbank` passes clean. Genuinely remaining: Dockerfile build-args (needs CapRover-side change) and the major dependency migrations (next/drizzle) — both need infra/testing decisions, see notes.

---

## P0 — Security (do first)

### 1. `.env` secrets leak into the Docker image
- [x] Add `.env` and `.env*` to [.dockerignore](.dockerignore) — DONE (added `.env`, `.env.*`, and `_scratch`)
- [x] Stopped passing runtime secrets as Docker build `ARG`s in [Dockerfile](Dockerfile). Removed the `ARG`/`ENV` for `EMAILJS_PRIVATE_KEY`, `RECAPTCHA_SECRET_KEY`, `BOL_API_CLIENT_ID/SECRET`, `BOL_PRODUCT_FEED_USERNAME/PASSWORD`, `ADMIN_PASSWORD`, `DATABASE_URL`. Only the 5 `NEXT_PUBLIC_*` values remain as build args (public, needed during `next build`). Server secrets are injected by CapRover at runtime (user confirmed they're set as the app's Environmental Variables). Verified `next build` passes with all server secrets unset.
- [x] Only `NEXT_PUBLIC_*` values remain at build time.
- Note: `ADMIN_PASSWORD` appears unused (code uses `ADMIN_PASSWORD_HASH`); safe to drop from CapRover too.
- Post-deploy check: `docker history <image> --no-trunc | grep -iE 'RECAPTCHA_SECRET|BOL_|DATABASE_URL'` should return nothing.

**Why:** Anyone with access to the image (CapRover registry, VPS) can extract production secrets.

### 2. Unauthenticated mutation endpoints — DONE
Added `verifyAdminAndGetWebsite(request)` to each (same pattern as the other admin routes).
- [x] [app/api/admin/create-snippet-enhanced/route.js](app/api/admin/create-snippet-enhanced/route.js) — replaced the `isAuthenticated() { return true }` stub with the real JWT check.
- [x] [app/api/affiliate-automation/route.js](app/api/affiliate-automation/route.js) — POST now requires auth.
- [x] [app/api/bol-feed/route.js](app/api/bol-feed/route.js) — POST `update` action now requires auth. **Note:** the `kennisbank-products` action was intentionally left public — it's called by the visitor-facing `BolProductLink` component, so auth is scoped to the `update` action only.

### 3. Admin login has no rate limiting — DONE
- [x] [app/api/admin/login/route.ts](app/api/admin/login/route.ts) now has in-memory brute-force protection (10 failed attempts / 15 min per IP → 429). Only failed attempts count; a successful login clears the counter. Implemented inline rather than via `lib/rate-limiter.ts` because that module's `RedisRateLimiter` is a stub that always returns `allowed: true` — see P3 note below.

### 4. Smaller security items
- [x] [app/api/track-click/route.js](app/api/track-click/route.js) — now validates `snippetId` against `/^[A-Za-z0-9_-]{1,128}$/` and caps distinct keys at 1000 (returns 429 when full). Also stops leaking raw error messages.
- [x] API responses now get security headers via [next.config.js](next.config.js) `headers()` for `/api/:path*` (`nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`). Set there rather than middleware because the middleware matcher excludes `/api`.
- [x] `GET /api/track-click` now requires admin JWT (was returning all click stats unauthenticated). No frontend calls the GET — components only POST clicks — so this is safe.
- [ ] Note: JWT tokens are valid 24h with no server-side revocation. Acceptable for single-admin, but logout is client-side only. (Design choice, not a quick fix — left as-is.)

---

## P1 — Dependency vulnerabilities

- [x] Ran `npm audit fix` (non-breaking transitive fixes applied).
- [x] **jspdf — CRITICAL** bumped `^3.0.3` → `^4.2.1` (path-traversal/LFI). Usage in `app/voedingsschemas/page.tsx` is core drawing API only, unaffected by v3→v4 breaking changes. Build verified.
- [ ] **drizzle-orm <0.45.2 — HIGH** (SQL injection via identifier escaping) → needs a deliberate bump + DB-layer testing (breaking major).
- [ ] **next `^14.0.0`** — multiple advisories (incl. middleware bypass); Next 14 is past support. Plan migration to maintained line (15+).
- [ ] dompurify / postcss / esbuild(dev) — moderate; resolve alongside the next/drizzle migrations.

Remaining `npm audit`: 10 (5 moderate, 5 high) — all require the major migrations above.

---

## P2 — Project hygiene / maintainability — DONE

### Root-level cruft
- [x] Moved loose non-app files into `_scratch/` (preserved, not deleted; `_scratch/` is dockerignored): `flesvoeding-calculator3.tsx`, `formula-mixing-calculator.tsx`, `hero.html`, `test-api.js`, `debug-bol-image.js`, `update-bullets.js`, `flesvoedingcalculator.xlsx`, `prompts.txt`, `styling.txt`, `feedback.txt`, `feedbackaug.txt`, `sitemap-xml.txt`, `image-prompts.txt`, `simple-image-prompts.txt`
- [x] Deleted committed backups: `lib/affiliate-automation.js.bak`, `app/api/affiliate-automation/route.js.bak`, `app/admin/dashboard/page.jsx.backup.*`

### Tooling
- [x] Removed `pnpm-lock.yaml` — kept `package-lock.json` (Docker uses `npm ci`).
- [x] Added a validator for the high-value CLAUDE.md rules: [scripts/lint-kennisbank.mjs](scripts/lint-kennisbank.mjs), run via `npm run lint:kennisbank`. Checks forbidden colored classes (amber allowed for warnings), UTF-8 emojis (the `→` link arrow is allowed), gray bullet dots, oversized headings (text-3xl/4xl), and inline `style` attributes. Exits non-zero on violations (CI-ready). The `template/` page is excluded (it documents the rules and quotes forbidden classes as examples). Fixed the 8 real violations it surfaced (orange/red classes in hygiene-bereiding, problemen-oplossen, hypoallergene-flesvoeding; a 🔄 emoji in voedingstechnieken). Not converted to ESLint rules — a standalone script was simpler and covers the highest-signal cases.

---

## P3 — Follow-ups discovered during fixes
- [x] [lib/rate-limiter.ts](lib/rate-limiter.ts): `RedisRateLimiter` no longer returns `{ allowed: true }` unconditionally. It now composes a real `InMemoryRateLimiter` and delegates to it (both when `REDIS_URL` is unset and as the not-yet-implemented Redis path), so limits are never silently bypassed. A real Redis sliding window is still a TODO, but the fallback enforces in the meantime. (`createRateLimiter` is currently unused — contact form and login use inline limiters — but it's now safe for future use.)

---

## What's already good (don't regress)
- bcrypt-hashed admin password (not plaintext compare)
- JWT secret required from env (throws if missing)
- reCAPTCHA + rate limiting on the contact form
- Solid security headers in middleware
- Well-sourced feeding constants (Voedingscentrum / ESPGHAN with citations)
- Most admin routes correctly check auth

---

## Suggested execution order
1. `.dockerignore` fix (1 min)
2. Auth on the 3 unauthenticated mutation routes (~15 min)
3. Rate-limit admin login (~15 min, limiter already exists)
4. `npm audit fix` + plan jspdf/drizzle/next bumps
5. Root cleanup, drop one lockfile, remove `.bak` files
