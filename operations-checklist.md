# Operations-checklist (beide sites)

Alles wat na de bouwfase (juli 2026) nog open staat om de sites
zelfstandig draaiend, gemeten en verdienend te maken. Afvinken en
weggooien wat klaar is. Product/functioneel is af; dit is de operatie.

Status-peildatum: 10 juli 2026.

---

## 1. Urgent - systeem draaiend houden

- [ ] **Database weer online** (was down op 10 juli, avond)
  ```bash
  df -h /
  docker ps | grep flesvoedingcalculator-db
  docker service logs srv-captain--flesvoedingcalculator-db --tail 20
  # bij volle schijf:
  docker builder prune -af && docker image prune -af
  ```
  Daarna beide sites + admin + prijzen op de widgets controleren.

- [ ] **Docker-cleanup cron installeren** (schijf liep 4x vol deze week)
  ```bash
  cat > /root/docker-cleanup.sh <<'S'
  #!/bin/bash
  docker builder prune -af >/dev/null 2>&1
  docker image prune -af >/dev/null 2>&1
  echo "$(date): docker cleanup ok"
  S
  chmod +x /root/docker-cleanup.sh
  ( crontab -l 2>/dev/null | grep -v docker-cleanup; echo "0 4 * * * /root/docker-cleanup.sh >> /root/docker-cleanup.log 2>&1" ) | crontab -
  crontab -l
  ```

- [ ] **Nachtelijke database-backup installeren** (na het dataverlies van
  9 juli niet optioneel; volume beschermt tegen herstart, niet tegen
  fouten of kapotte schijf)
  ```bash
  mkdir -p /root/backups
  cat > /root/db-backup.sh <<'S'
  #!/bin/bash
  set -e
  CID=$(docker ps -qf name=flesvoedingcalculator-db)
  PGUSER=$(docker exec "$CID" printenv POSTGRES_USER)
  STAMP=$(date +%Y%m%d-%H%M)
  docker exec "$CID" pg_dumpall -U "$PGUSER" | gzip > "/root/backups/all-databases-$STAMP.sql.gz"
  find /root/backups -name "all-databases-*.sql.gz" -mtime +7 -delete
  echo "$(date): backup ok"
  S
  chmod +x /root/db-backup.sh
  ( crontab -l 2>/dev/null | grep -v db-backup; echo "30 2 * * * /root/db-backup.sh >> /root/backups/backup.log 2>&1" ) | crontab -
  /root/db-backup.sh && ls -lh /root/backups/
  ```
  Wens erna: 1x per week een backup naar buiten de server kopieren
  (SD-kaart/laptop), anders beschermt hij niet tegen schijfuitval.

- [ ] **CRON_SECRET (roteren + zetten)** - de lokale prijssync
  (`npm run sync:prices` / launchd 07:00) schrijft via
  `/api/cron/prices-local`, dat deze secret vereist. De oude waarden
  stonden hier hardcoded en zijn gelekt in de git-history; genereer een
  NIEUWE waarde en zet die op 3 plekken. Waarden NIET in dit bestand
  zetten; bewaar ze in een password manager / buiten git.
  | Waar | Naam | Waarde |
  |---|---|---|
  | CapRover -> flesvoedingcalculator env | CRON_SECRET | <nieuw geheim> |
  | CapRover -> togwaarde env | CRON_SECRET | <zelfde nieuw geheim> |
  | Mac: `~/Library/LaunchAgents/nl.flesvoeding.pricesync.plist` | CRON_SECRET | <zelfde> (dan `launchctl unload/load`) |
  Genereer bijv. met `openssl rand -hex 24`. Test: `npm run sync:prices`
  -> prijzen/priceLastUpdated vernieuwd.
  (De GitHub Actions-secret is niet meer nodig; die workflow is verwijderd.)

- [ ] **Uptime-monitoring** (DB ging 2x stuk op één dag zonder dat we
  het merkten). Gratis UptimeRobot/BetterStack, 4 monitors:
  - https://flesvoedingcalculator.nl (verwacht 200)
  - https://togwaarde.nl (verwacht 200)
  - https://flesvoedingcalculator.nl/api/popular-snippets?limit=1
    (verwacht 200; dekt de database!)
  - https://togwaarde.nl/api/affiliates/page/reverse-slaapzakken/
  Alert naar jpscholtanus@gmail.com.

- [ ] **RAM/servergroei beslissen** - 4GB gaf herhaaldelijk Postgres-
  OOM; rescale van het legacy CAX11-plan bleek geblokkeerd. Opties:
  (a) Hetzner Volume voor disk + accepteren van RAM-krapte,
  (b) nieuwe server + migratie (CapRover one-click restore),
  (c) niets doen tot het weer knelt. Beslissing parkeren tot na
  verwijdering wk2026-app (scheelt ~2,6GB image + RAM).

- [ ] **wk2026-app verwijderen na het WK** (jouw actie).

## 2. Commercieel - de winkel vullen

- [ ] **Togwaarde: 2.5 TOG slaapzak toevoegen** (admin, tag "2.5 TOG",
  koppelen aan Standaard). Dit is het advies voor 16-19°C = de meeste
  Nederlandse slaapkamers; nu valt de widget daar terug op de
  zomer-producten.
- [ ] **Togwaarde: 3.5 TOG (winter) toevoegen** - zelfde route.
- [ ] **Flesvoeding: catalogus uitbreiden** (~3 producten nu) - minimaal
  per categorie één: flessen-starterset, sterilisator, flessenwarmer,
  spenen. Bron: expansion/../affiliate-producten-links.md werklijst.
- [ ] **Artikelpagina's producten geven** - de meeste kennisbank-
  pagina's hebben geen toewijzing (vrijgekomen AdSense-plekken zijn
  leeg). Werkwijze: per categorie 1 relevant blok, via Page Assignment;
  inherit_default aan laten waar het Standaard-setje volstaat.
- [ ] **Amazon-prijzen periodiek checken** - handmatig beleid (zie
  affiliate-disclaimer): maandelijks via de ↗-knoppen in de admin.

## 3. Meten - de inzicht-lus sluiten

- [ ] **Umami-funnels aanmaken** (Reports -> Funnel, per site):
  home -> /calculator -> event affiliate_click, en
  artikel -> home/calculator -> affiliate_click.
  NB: de eigen funnel (berekening -> klik) + links naar Umami/GSC en de
  maandroutine staan nu in de admin onder de Statistieken-tab.
- [ ] **GSC: sitemaps opnieuw indienen** (beide properties) na alle
  wijzigingen van deze week; indexdekking controleren.
- [ ] **Maandelijkse GSC-regexroutine starten** (30 min; regexes staan
  in togwaarde/vragen-content.md, werkwijze in togwaarde/google-plan.md
  §1/§8). Eerste run: augustus.
- [ ] **Na 4-6 weken**: de "kliks per berekening"-ratio (staat live in
  de Statistieken-tab, funnel-kaart) naast de aannames in
  expansion/internationale-uitbreiding.md §3 leggen.

## 4. Hygiëne - klein, niet blokkerend

- [x] fles `/disclaimer` opgeruimd: 301 naar /medische-disclaimer,
  pagina + sitemap-entry verwijderd.
- [x] Sync-routes vervangen: admin "Sync prices"-knoppen gebruiken nu
  dezelfde DB-sync als de cron (fles synct beide sites; togwaarde's
  knop wees zelfs naar een niet-bestaande route en werkt nu).
- [x] `hide_all_ads` verwijderd uit de admin (toggle, fetches, state);
  DB-rij is onschadelijk en mag blijven.
- [x] togwaarde CSP: bewuste keuze genoteerd in middleware.js
  (tracker-entries blijven staan zodat de COOKIE_TRACKERS_ENABLED-vlag
  zonder CSP-breuk terug aan kan).
- [x] `info@togwaarde.nl`: bewust NIET - het contactformulier (mailt
  naar info@vidorra.nl) volstaat. Besloten 10 juli 2026.
- [ ] Schema-backlog google-plan §5: WebApplication staat nu op beide
  togwaarde-calculators (fles had al SoftwareApplication); nog open:
  Article + BreadcrumbList op kennisbankartikelen, eigen OG-images.
- [ ] adsense-herintroductie.md staat alleen lokaal (gitignored) -
  kopie bewaren buiten deze laptop als je hem wilt houden.

## 5. Groei-cadans (doorlopend, geen blokkers)

- [ ] 1 kennisbankartikel per 1-2 weken (T3-backlog uit GSC-data).
- [ ] Hittegolf-persmoment voorbereiden voor volgende zomer
  (google-plan §7).
- [ ] Expansion fase-0 KPI's bewaken (expansion/internationale-
  uitbreiding.md §9): beslismoment oktober 2026.

---

**Definitie van "klaar":** secties 1 t/m 3 volledig afgevinkt. Sectie 4
is opruimwerk voor een regenachtige middag; sectie 5 is ritme, geen
project.
