import { poolQuery } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS activities (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT, 
    budget INTEGER,
    saved BOOLEAN,
    image TEXT,
    );`;

//  `CREATE TABLE IF NOT EXISTS activities (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     name VARCHAR(35), 
//     budget INTEGER,
//     saved BOOLEAN NOT NULL DEFAULT FALSE,
//     image TEXT,
//     );`
// budget INTEGER NOT NULL CHECK (budget between 1 and 3),

async function createTable() {
  const res = await poolQuery(sqlString);
  console.log(res);
  console.log("created activities table");
}

createTable();
