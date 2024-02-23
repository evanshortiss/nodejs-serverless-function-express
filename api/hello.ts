import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
export default async function handler(req: VercelRequest, res: VercelResponse) {  
  const rows = await sql`SELECT * from playing_with_neon;`
  const version = await sql`SELECT version();`
  return res.json({
    hostname: new URL(process.env.DATABASE_URL).hostname,
    version
  })
}
