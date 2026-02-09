# 🔧 TODO: Environment Configuratie Guide

**Status**: Stap-voor-stap gids voor alle benodigde services
**Doel**: Alle environment variabelen correct configureren voor productie

---

## 📋 Samenvatting Services

| Service | Kosten | Registratie | Gebruikt voor |
|---------|--------|------------|---------------|
| **EmailJS** | FREE (200/maand) | ✅ Vereist | Contact form emails |
| **reCAPTCHA** | GRATIS | ✅ Vereist | Spam protection |
| **Bol.com API** | GRATIS + commissie | ✅ Vereist | Product feeds |
| **PostgreSQL** | Afhankelijk | ✅ Vereist | Database |
| **Redis** | GRATIS (optioneel) | ❌ Optioneel | Rate limiting |
| **JWT Secret** | GRATIS | 🔧 Zelf genereren | Admin auth |

---

## 1️⃣ EmailJS - Contact Form Emails ✉️

### Status: ⏳ TODO

### Wat is het?
Service waarmee je emails kan versturen van je website zonder eigen mail server.

### Kosten?
- **FREE**: 200 emails per maand (genoeg voor contact form)
- **Paid**: Meer emails ($15+/maand)
- **Vereist**: GEEN creditcard voor gratis tier

### Hoe inzetten?

#### Stap 1: Account aanmaken
1. Ga naar https://www.emailjs.com/
2. Klik "Sign Up" (rechts boven)
3. Kies "Create account with Email"
4. Vul je gegevens in
5. Bevestig via email

#### Stap 2: Service en Template aanmaken
1. Login op https://dashboard.emailjs.com/
2. Linkerkant: **"Email Services"**
3. Klik **"Add Service"**
4. Kies email provider (Gmail, Outlook, of "Email Service")
5. Volg setup wizard
6. Nota: Service ID (je hebt dit nodig!)

#### Stap 3: Email Template aanmaken
1. Linkerkant: **"Email Templates"**
2. Klik **"Create Template"**
3. Maak template met dit format:
```
Onderwerp: {{subject}}
Van: {{from_name}} ({{from_email}})
Type: {{message_type}}

Bericht:
{{message}}
```
4. Nota: Template ID

#### Stap 4: API Keys ophalen
1. Linkerkant: **"Account"**
2. Scroll naar "API Keys"
3. Zie je public key (kopieren)
4. Klik **"Show"** voor private key (kopieren)

#### Stap 5: .env.example updaten
```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
EMAILJS_PRIVATE_KEY=your_private_key_here
```

**Kosten**: ✅ GRATIS (200/maand inbegrepen)

---

## 2️⃣ Google reCAPTCHA - Spam Protection 🤖

### Status: ⏳ TODO

### Wat is het?
Beschermt je contact form tegen bots en spam.

### Kosten?
- **VOLLEDIG GRATIS** - Google biedt dit kosteloos aan
- Geen limit op aantal checks
- Werkt overal ter wereld

### Hoe inzetten?

#### Stap 1: Google Console openen
1. Ga naar https://www.google.com/recaptcha/admin
2. Log in met je Google account (maak een aan als je geen hebt)
3. Klik **"Create"** of **"+"**

#### Stap 2: reCAPTCHA instellen
1. Vul in:
   - **Label**: "Flesvoeding Calculator"
   - **reCAPTCHA type**: Selecteer "reCAPTCHA v3" (most recent)
   - **Domains**: `flesvoedingcalculator.nl` (en `localhost` voor testing)
2. Accept terms
3. Klik **"Create"**

#### Stap 3: Keys kopieren
Je ziet nu:
- **Site Key** (publiek, in frontend)
- **Secret Key** (privé, op server)

Kopieren beide!

#### Stap 4: .env.example updaten
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Kosten**: ✅ VOLLEDIG GRATIS (geen limits)

---

## 3️⃣ Bol.com Partner API - Product Feeds 🛍️

### Status: ⏳ TODO

### Wat is het?
Bol.com API waarmee je product informatie kan ophalen voor je kennisbank.

### Kosten?
- **Gratis om deel te nemen** - Geen inschrijving
- **Verdien commissie** - Als je links plaatst en mensen kopen
- Typisch 5-10% commissie per verkocht product

### Hoe inzetten?

#### Stap 1: Partner Program aanmelden
1. Ga naar https://partnerprogramma.bol.com/
2. Klik **"Aanmelden"** (rechtsboven)
3. Maak account aan met je emailadres
4. Vul bedrijfsgegevens in
5. Bevestig via email

#### Stap 2: API Credentials aanvragen
1. Login op https://partnerdashboard.bol.com/
2. Linkerkant: **"Instellingen"** → **"API"**
3. Klik **"API-kredentialen genereren"**
4. Je krijgt:
   - **Client ID**
   - **Client Secret**
5. Kopieren beide!

#### Stap 3: Product Feed Setup (optioneel)
Voor groot product assortiment:
1. Linkerkant: **"Gereedschappen"** → **"Product Feed"**
2. Klik **"FTP-inloggegevens instellen"**
3. Je krijgt FTP gebruikersnaam en wachtwoord

#### Stap 4: .env.example updaten
```bash
# Basis API
BOL_API_CLIENT_ID=your_client_id_here
BOL_API_CLIENT_SECRET=your_client_secret_here

# Product Feed (optioneel)
BOL_PRODUCT_FEED_USERNAME=your_feed_username_here
BOL_PRODUCT_FEED_PASSWORD=your_feed_password_here
```

**Kosten**: ✅ GRATIS (verdien commissie op verkopen)

---

## 4️⃣ PostgreSQL Database - Data Opslag 💾

### Status: ⏳ TODO

### Wat is het?
Database waarin alle data wordt opgeslagen (admin, contact berichten, etc).

### Kosten?
Hangt af van jouw hosting:

| Hosting | Kosten | Database |
|---------|--------|----------|
| **CapRover (self-hosted)** | VPS cost (~€10-20/maand) | PostgreSQL Docker |
| **Render** | FREE tier (limited) | PostgreSQL managed |
| **Railway** | FREE tier (limited) | PostgreSQL managed |
| **Heroku** | Betaald (~€50+/maand) | PostgreSQL managed |

### Voor CapRover (aanbevolen):

#### Stap 1: PostgreSQL Container toevoegen
1. Open CapRover dashboard
2. Klik **"One-Click Apps"**
3. Zoek **"PostgreSQL"**
4. Klik "Install"
5. Vul in:
   - **Container name**: `flesvoedingcalculator-db`
   - **Database name**: `flesvoedingcalculator`
   - **Username**: `flesvoeding_user`
   - **Password**: Sterk wachtwoord (minimaal 16 chars)

#### Stap 2: Verbinding instellingen
Na installatie zie je intern URL:
```
postgresql://flesvoeding_user:password@srv-captain--flesvoedingcalculator-db:5432/flesvoedingcalculator
```

#### Stap 3: .env.example updaten
```bash
DATABASE_URL="postgresql://flesvoeding_user:your_password@srv-captain--flesvoedingcalculator-db:5432/flesvoedingcalculator"
```

**Kosten**: ✅ GRATIS (als je CapRover zelf host)

---

## 5️⃣ Redis - Rate Limiting (Optioneel) ⚡

### Status: ⏳ OPTIONEEL (maar aanbevolen)

### Wat is het?
In-memory database voor:
- Rate limiting (voorkomen van spam)
- Caching (sneller laden)
- Sessions (admin login)

### Kosten?

| Optie | Kosten | Voor |
|-------|--------|------|
| **CapRover** | GRATIS | Self-hosted, production |
| **Upstash** | GRATIS tier (10K commands/dag) | Serverless, development |
| **Redis Cloud** | Betaald (~$5+/maand) | Enterprise |

### Voor CapRover:

#### Stap 1: Redis Container toevoegen
1. CapRover dashboard
2. **"One-Click Apps"**
3. Zoek **"Redis"**
4. Klik "Install"
5. Vul in:
   - **Container name**: `redis`
   - **Password**: Sterk wachtwoord (optioneel)

#### Stap 2: URL noteren
```
redis://srv-captain--redis:6379
```

#### Stap 3: .env.example updaten
```bash
REDIS_URL=redis://srv-captain--redis:6379
```

### Voor Upstash (serverless):

#### Stap 1: Account maken
1. Ga naar https://upstash.com/
2. **Sign up** met GitHub of email
3. Kies free tier

#### Stap 2: Database aanmaken
1. Dashboard → **"Create Database"**
2. Selecteer regio (EU)
3. Klik **"Create"**

#### Stap 3: Credentials kopieren
```
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

#### Stap 4: .env.example updaten
```bash
UPSTASH_REDIS_REST_URL=https://your-endpoint.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

**Kosten**: ✅ GRATIS (tier beschikbaar)

---

## 6️⃣ JWT Secret - Admin Authenticatie 🔐

### Status: ⏳ TODO (zelf genereren)

### Wat is het?
Geheim voor het ondertekenen van admin login tokens.

### Kosten?
VOLLEDIG GRATIS - zelf genereren!

### Hoe aanmaken?

#### Optie 1: Node.js gebruiken
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Output voorbeeld:
```
a3f8d2b9c1e4f7a2b5c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9
```

#### Optie 2: Online generator
https://www.uuidgenerator.net/

#### Stap 3: .env.example updaten
```bash
JWT_SECRET=a3f8d2b9c1e4f7a2b5c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9
```

**Kosten**: ✅ VOLLEDIG GRATIS

---

## 7️⃣ Admin Password Hash - Beveiligde Login 🔒

### Status: ⏳ TODO (zelf genereren)

### Wat is het?
Bcrypt hash van je admin wachtwoord (NIET plain text!).

### Kosten?
VOLLEDIG GRATIS - zelf genereren!

### Hoe aanmaken?

#### Stap 1: Generator installeren (eenmalig)
```bash
npm install bcryptjs
```

#### Stap 2: Hash genereren
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('je-sterke-wachtwoord-hier', 10));"
```

Output voorbeeld (60+ characters):
```
$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/R1.
```

#### Stap 3: .env.example updaten
```bash
ADMIN_PASSWORD_HASH=$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/R1.
```

⚠️ **BELANGRIJK**:
- Zet NOOIT je plain text wachtwoord in .env!
- Zet NOOIT de hash in versiebeheer!
- Alleen de hash in CapRover environment variables

**Kosten**: ✅ VOLLEDIG GRATIS

---

## 📋 Checklist - Stap voor stap

### Week 1: Setup Services
- [ ] **EmailJS account** aanmaken
  - [ ] Service ID noteren
  - [ ] Template ID noteren
  - [ ] Public key kopieren
  - [ ] Private key kopieren

- [ ] **Google reCAPTCHA** aanmaken
  - [ ] Site key kopieren
  - [ ] Secret key kopieren

- [ ] **Bol.com Partner Program** aanmelden
  - [ ] Client ID kopieren
  - [ ] Client Secret kopieren
  - [ ] (Optioneel) Feed username/password

### Week 2: Database & Caching
- [ ] **PostgreSQL** op CapRover installeren
  - [ ] Database URL noteren

- [ ] **Redis** op CapRover installeren (optioneel)
  - [ ] Redis URL noteren

### Week 3: Secrets Genereren
- [ ] **JWT Secret** genereren
  - [ ] Veilig opslaan

- [ ] **Admin Password Hash** genereren
  - [ ] Hash kopieren (nooit plain text!)

### Week 4: Deploy
- [ ] Alle environment variables in CapRover instellen
- [ ] Application testen
- [ ] Contact form testen
- [ ] Admin login testen

---

## 🚀 Environment Variables Template

Wanneer je alles hebt:

```bash
# EmailJS
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
EMAILJS_PRIVATE_KEY=xxxxx

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxxxx
RECAPTCHA_SECRET_KEY=xxxxx

# Bol.com
BOL_API_CLIENT_ID=xxxxx
BOL_API_CLIENT_SECRET=xxxxx
BOL_PRODUCT_FEED_USERNAME=xxxxx (optioneel)
BOL_PRODUCT_FEED_PASSWORD=xxxxx (optioneel)

# Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# Redis (optioneel)
REDIS_URL=redis://host:6379
# OF voor Upstash:
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# Security
JWT_SECRET=xxxxx (64 char hex)
ADMIN_PASSWORD_HASH=$2b$10$xxxxx (60+ char bcrypt)
```

---

## ❓ Veel Gestelde Vragen

### Q: Moet ik allemaal inschrijven?
**A**: Ja, minimaal:
- EmailJS (contact form)
- reCAPTCHA (spam protection)
- Bol.com (product feeds)
- Database (CapRover PostgreSQL)

Redis is optioneel maar aanbevolen.

### Q: Kosten dit geld?
**A**: Nee! Alles gratis:
- EmailJS: 200 emails/maand gratis
- reCAPTCHA: Volledig gratis
- Bol.com: Gratis partnerprogramma
- Database: Gratis op CapRover (je host het zelf)
- Redis: Gratis op CapRover

### Q: Hoe lang duurt setup?
**A**: ~2-3 uur totaal:
- EmailJS: 15 minuten
- reCAPTCHA: 10 minuten
- Bol.com: 30 minuten
- Database: 15 minuten
- Redis: 10 minuten
- Secrets: 15 minuten

### Q: Wat als ik iets verkeerd doe?
**A**: Alles kan je opnieuw inzetten. Geen kosten, geen risico.

### Q: Moet ik dit alles echt doen?
**A**: Minimaal nodig:
- ✅ EmailJS (contact form)
- ✅ reCAPTCHA (spam)
- ✅ Database (data)
- ✅ Admin secrets

Optioneel maar aanbevolen:
- ⚠️ Bol.com (als je affiliate links wilt)
- ⚠️ Redis (voor rate limiting)

---

## 📞 Support Links

- **EmailJS Help**: https://www.emailjs.com/docs/
- **reCAPTCHA Setup**: https://developers.google.com/recaptcha/intro
- **Bol.com API**: https://api.bol.com/
- **PostgreSQL**: https://www.postgresql.org/docs/
- **Redis**: https://redis.io/docs/
- **Upstash**: https://upstash.com/docs/redis/overall/getstarted

---

**Wanneer je alles hebt ingesteld, ben je klaar voor productie! 🚀**
