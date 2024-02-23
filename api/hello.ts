import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = neon(process.env.DATABASE_URL);
  
  const version = await sql`SELECT * from playing_with_neon;`
  return res.json({
    version
  })
}
