
import pg from 'pg';
export const pool = new pg.Pool({
  connectionString: "postgres://tjzldbdpqtlvyi:e2bf0a54d653c4ca7cfe7e99aca43735b72309b15176ee8283e487012c396cbe@ec2-52-30-75-37.eu-west-1.compute.amazonaws.com:5432/dcn7n0ovqpk8dr",

  ssl: {
    rejectUnauthorized: false
  } ,
});
 export function query(text, params, callback){
  return pool.query(text, params, callback);
}
 