import { pool } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS activities (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(35), 
    budget INTEGER NOT NULL CHECK (activity_budget between 1 and 3),
    saved BOOLEAN NOT NULL DEFAULT FALSE,
    image TEXT,
    );`;


async function createTable() {
  const res = await pool.query(sqlString);
  console.log(res);
}

createTable();
