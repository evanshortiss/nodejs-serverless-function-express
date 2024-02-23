import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = neon(process.env.DATABASE_URL);
  
  const rows = await sql`SELECT * from playing_with_neon;`
  const version = await sql`SELECT version();`
  return res.json({
    version,
    rows
  })
}
