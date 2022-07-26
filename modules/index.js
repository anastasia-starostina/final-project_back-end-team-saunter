import  {pool}  from '../db/index.js'

export const selectAllLessons = async function () {
  const results = await pool.query("SELECT * FROM lessons");
  return results.rows;
};

export const selectLessonsById = async function (id) {
  const results = await pool.query(
    `SELECT * FROM lessons WHERE lesson_id = $1;`, [id]
  );
  console.log(results.rows);
  return results.rows;
};

const sqlString = `CREATE TABLE IF NOT EXISTS lessons (lesson_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, topic TEXT, description TEXT, zoom TEXT, paypalEmail TEXT, dateTime timestamp, duration INT, starRating INT);`;

export const postLessons = async function postLessons(name, topic, description, zoom, paypalemail, datetime, duration, starrating) {
       const results = await pool.query(
           `INSERT INTO lessons (name, topic, description, zoom, paypalemail, datetime, duration, starrating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`, 
           [name, topic, description, zoom, paypalemail, datetime, duration, starrating]
       );
}

export const selectLessonsByTopic = async function (topic) {
  const results = await pool.query(
    `SELECT * FROM lessons WHERE topic LIKE '%${topic}%';`
  );
  return results.rows;
};

export const deleteLessonsByTopic = async function (topic) {
  const results = await pool.query(
    `DELETE FROM lessons WHERE topic LIKE '%${topic}%';`
  );
  return results.rows;
};

export const deleteLessonsById = async function (id) {
  const results = await pool.query(
    `DELETE FROM lessons WHERE lesson_id = '${id}';`
  );
  return results.rows;
};
// async function populateDogsTable() {
//   for (let i = 0; i < dogsData.length; i++) {
//        const res = await query (
//            `INSERT INTO dogs (dog_name, dog_gender, owner_name, email) VALUES ($1, $2, $3, $4) RETURNING *;`, 
//            [dogsData[i].dog_name, dogsData[i].dog_gender, dogsData[i].owner_name, dogsData[i].email]
//        );
//    console.log(res.rows[0],"inserted");
//    }
// }

