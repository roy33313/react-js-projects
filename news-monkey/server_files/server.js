const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(`${req.query.q ? req.query.q : "economy"}.json`, {
    root: "./server_files",
  });
});

app.listen(2999, () => {
  console.log("listening on 2999");
});
