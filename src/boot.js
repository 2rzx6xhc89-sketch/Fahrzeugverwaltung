import 'dotenv/config';
import { spawnSync, spawn } from 'node:child_process';
function run(script){
 const r=spawnSync(process.execPath,[script],{stdio:'inherit',env:process.env});
 if(r.status!==0) process.exit(r.status||1);
}
if(!process.env.JWT_SECRET) throw new Error('JWT_SECRET is required');
if(!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');
run('src/migrate.js');
if(process.env.ADMIN_PASSWORD) run('src/create-admin.js');
else console.warn('ADMIN_PASSWORD is not set: admin bootstrap skipped.');
const child=spawn(process.execPath,['src/server.js'],{stdio:'inherit',env:process.env});
child.on('exit',code=>process.exit(code??0));
for(const sig of ['SIGTERM','SIGINT']) process.on(sig,()=>child.kill(sig));
