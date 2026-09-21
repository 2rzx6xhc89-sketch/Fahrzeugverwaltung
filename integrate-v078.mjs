import { readFile,writeFile } from 'node:fs/promises';
const source=process.argv[2]||'Fahrzeugverwaltung_Gemeinde_Aerzen_V0.078.html';
let html=await readFile(source,'utf8');
if(!/<\/body>/i.test(html)) throw new Error('Keine vollständige HTML-Datei: </body> fehlt.');
html=html.replace(/Fahrzeugverwaltung V0\.078/g,'Fahrzeugverwaltung V0.079 Online').replace(/Version V0\.078/g,'Version V0.079 Online');
const tags='\n<script src="/online-sync.js"></script>\n<script src="/online-ui.js"></script>\n';
if(!html.includes('/online-sync.js')) html=html.replace(/<\/body>/i,tags+'</body>');
await writeFile('public/index.html',html,'utf8');
console.log('V0.078 wurde als public/index.html integriert.');
