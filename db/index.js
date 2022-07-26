//Import pg module to communicate with our database
import pg from "pg";

//Setup a new pool which will be the connection to the database
//Use our Heroku credentials in the pool or client
export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  
  ssl: {
    rejectUnauthorized: false,
  },
});

//Make a function that takes in an SQL string and runs pool.query using that string
//Export query function
export function poolQuery(string) {
  return pool.query(string);
}
//Testing that the pool query works and what it gives back.
async function log() {
  let now = await poolQuery(`SELECT NOW()`);
  console.log(now);
}

//log()
