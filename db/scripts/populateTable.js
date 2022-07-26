import pool from "../index.js";
import activities from "../../libs/activities.js";

// populates resources table with the given data
async function populateTable() {
 
  for (let i = 0; i < test.length; i++) {
    const response = await pool.query(
      `INSERT INTO activities (name, budget, saved, image) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [
        activities[i].name,
        activities[i].budget,
        activities[i].saved,
        activities[i].image,
      ]
    );
    pool.end();
    console.log(response.rows);
  }
}

populateTable();
