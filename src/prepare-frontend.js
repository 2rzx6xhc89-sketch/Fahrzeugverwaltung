import { access, readFile, writeFile } from 'node:fs/promises';
const candidates=[
  'Fahrzeugverwaltung_Gemeinde_Aerzen_V0.078.html',
  'frontend/Fahrzeugverwaltung_Gemeinde_Aerzen_V0.078.html',
  'public/Fahrzeugverwaltung_Gemeinde_Aerzen_V0.078.html'
];
let source='';
for(const p of candidates){try{await access(p);source=p;break}catch{}}
if(!source){
  console.log('Keine V0.078-Quelldatei gefunden; vorhandene public/index.html wird verwendet.');
  process.exit(0);
}
let html=await readFile(source,'utf8');
if(!/<\/body>/i.test(html)) throw new Error('V0.078 ist unvollständig: </body> fehlt.');
html=html.replace(/Fahrzeugverwaltung V0\.078/g,'Fahrzeugverwaltung V0.079 Online')
 .replace(/Version V0\.078/g,'Version V0.079 Online');
const tags='\n<script src="/online-sync.js"></script>\n<script src="/online-ui.js"></script>\n';
if(!html.includes('/online-sync.js')) html=html.replace(/<\/body>/i,tags+'</body>');
await writeFile('public/index.html',html,'utf8');
console.log(`Frontend automatisch integriert: ${source} -> public/index.html`);
