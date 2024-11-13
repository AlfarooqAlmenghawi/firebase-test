const db = require("../count-database/connection.js");

const getCount = (request, response) => {
  return db.query(`SELECT * FROM count;`).then(({ rows }) => {
    response.status(200).send({ count_value: rows });
  });
};

const changeCount = (request, response) => {
  return db
    .query(
      `UPDATE count 
    SET count = count + 1
    RETURNING *;`
    )
    .then(({ rows }) => {
      response.status(200).send({ count_value: rows });
    });
};

module.exports = { getCount, changeCount };
