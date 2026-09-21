# Fahrzeugverwaltung Aerzen V0.079.2 - Render Free Auto

Diese Variante benötigt keinen lokalen Integrationsbefehl. Render führt beim Build automatisch `npm run build` aus. Dabei wird die V0.078-HTML-Datei gesucht, als `public/index.html` vorbereitet und mit Online-Synchronisation und Online-Anmeldung ergänzt.

## GitHub-Upload

Lade den vollständigen Inhalt dieses Ordners hoch. Wenn die vollständige V0.078 als `Fahrzeugverwaltung_Gemeinde_Aerzen_V0.078.html` im Repository-Stamm liegt, integriert Render die Oberfläche automatisch. Ein lokaler Schritt mit `integrate-v078.mjs` ist nicht erforderlich.

## Render

1. Blueprint aus dem privaten GitHub-Repository erstellen.
2. `ADMIN_PASSWORD` mit mindestens 12 Zeichen eingeben.
3. Render erstellt kostenlosen Web Service und kostenlose PostgreSQL-Ressource.
4. Build: `npm install && npm run build`.
5. Start: `npm start`; dabei laufen Migration, Admin-Bootstrap und Serverstart.
6. `/api/health` muss `{ "ok": true }` liefern.

## Automatische Variablen

- `DATABASE_URL`: Render PostgreSQL
- `JWT_SECRET`: wird generiert
- `NODE_VERSION`: 20
- `ADMIN_USERNAME`: admin
- `CORS_ORIGIN`: zunächst `*`

## Sicherheit

- Repository privat halten.
- Keine `.env` hochladen.
- `CORS_ORIGIN` nach dem Test auf die tatsächliche Render-Domain begrenzen.
- Die kostenlose Render-Ausprägung nur für Tests/Prototypen einsetzen.
