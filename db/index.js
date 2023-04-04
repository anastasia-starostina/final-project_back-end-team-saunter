
import pg from 'pg';
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  password: process.env.PASSWORD,

  ssl: {
    rejectUnauthorized: false,
  },
});
 export function query(text, params, callback){
  return pool.query(text, params, callback);
}
 
