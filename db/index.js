
import pg from 'pg';
export const pool = new pg.Pool({
  //store external database url in .env file
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },
});
 export function query(text, params, callback){
  return pool.query(text, params, callback);
}
 
