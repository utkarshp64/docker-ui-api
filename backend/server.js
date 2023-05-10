const express = require("express");
const app = express();
const port = 8000;

app.get("/api/", (req, res) => {
  res.send({ message: "LIVE" });
});

app.post("/api/auth/login", (req, res) => {
  const date = new Date();
  const expiry = date.setHours(date.getHours() + 5);
  res.send({ token: "token", expiry: expiry });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
