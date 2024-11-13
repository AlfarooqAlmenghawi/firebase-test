const format = require("pg-format");
const db = require("../connection.js");

const seed = ({ countdata }) => {
  return db
    .query("DROP TABLE IF EXISTS count;") // Drop the table instead of the database
    .then(() => {
      return db.query(`
        CREATE TABLE count (
          count INT DEFAULT 0 NOT NULL
        );
      `);
    })
    .then(() => {
      return db.query(`INSERT INTO count (count) VALUES (0)`);
    })
    .then(() => {
      console.log("Database tables created successfully.");
    })
    .catch((err) => {
      console.error("Error while seeding:", err);
    });
};

module.exports = seed;
