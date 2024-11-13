const express = require("express");
const app = express();

const { getCount, changeCount } = require("./file/countManager.js");

app.use(express.json());

app.get("/api/count", getCount);

app.patch("/api/count", changeCount);

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on local server 8000...");
  }
});
