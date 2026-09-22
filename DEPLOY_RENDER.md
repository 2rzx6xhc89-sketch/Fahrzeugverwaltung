# Kurzcheck Render
- Repository privat
- `render.yaml` in der Wurzel
- `public/index.html` enthält die vollständige App und `/online-sync.js`
- `ADMIN_PASSWORD` gesetzt
- Healthcheck `/api/health` liefert `{ "ok": true }`
- Test Mac -> iPhone: Fahrzeug auf Alarmiert setzen; nach WebSocket-Signal bzw. spätestens nach 3 Sekunden muss der Status erscheinen
- Test Lagekarte: Marker verschieben und auf dem zweiten Gerät prüfen
