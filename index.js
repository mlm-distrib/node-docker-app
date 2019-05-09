const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server running at Port ~ test " + port);
});

app.listen(port);
console.log("app started!");
