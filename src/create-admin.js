import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool } from './db.js';
const username=process.env.ADMIN_USERNAME||'admin';
const password=process.env.ADMIN_PASSWORD;
if(!password || password.length<12) throw new Error('ADMIN_PASSWORD with at least 12 characters is required');
const hash=await bcrypt.hash(password,12);
await pool.query(`INSERT INTO users(username,password_hash,role) VALUES($1,$2,'admin')
 ON CONFLICT(username) DO UPDATE SET password_hash=EXCLUDED.password_hash,role='admin',active=true,password_changed_at=now(),updated_at=now()`,[username,hash]);
console.log(`Admin user ${username} created or updated.`);
await pool.end();
