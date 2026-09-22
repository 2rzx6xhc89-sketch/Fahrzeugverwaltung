# Fahrzeugverwaltung Gemeinde Aerzen V0.085 Online

Komplettpaket für GitHub und Render: Node.js/Express, PostgreSQL, JWT-Anmeldung, REST-API, Audit-Protokoll, WebSocket und 3-Sekunden-Abgleich.

## Einmalig vor dem GitHub-Upload
1. Die angepasste V0.085-HTML in die Wurzel dieses Projektordners kopieren.
2. Im Terminal im Projektordner ausführen:
   `node integrate-html.mjs Fahrzeugverwaltung_Gemeinde_Aerzen_V0.085_mit_Versionsanzeige.html`
3. Prüfen, dass `public/index.html` jetzt die vollständige Oberfläche enthält.
4. Den gesamten Ordner in ein privates GitHub-Repository hochladen.

## Render
1. In Render `New > Blueprint` wählen und das Repository verbinden.
2. `ADMIN_PASSWORD` als starkes Startpasswort setzen.
3. Blueprint bereitstellen.
4. `/api/health` prüfen.
5. Mit `admin` und dem gesetzten Passwort anmelden.

## Enthaltene Online-Zustände
Fahrzeuge, operativer Einsatzstatus, Abschnitte, Lagekarte, Markerfilter, Logbuch, Lageinformationen und Einstellungen.

## Wichtiger Hinweis zur kostenlosen Variante
Das Paket nutzt kostenlose Render-Instanzen. Diese sind laut Render für Tests und Vorschauen gedacht. Der Web Service kann nach Inaktivität herunterfahren. Das Dateisystem ist flüchtig. Die kostenlose PostgreSQL-Instanz kann zeitlich begrenzt sein. Für einen dauerhaften Produktivbetrieb später eine dauerhafte PostgreSQL-Datenbank über `DATABASE_URL` verbinden.
