const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  if (req.query.via == "iyuk") {
    next();
  } else {
    console.log("dilarang!");
  }
};

app.use(middleware);

app.get("/fania", (req, res) => {
  res.send("hi saya fania");
});

app.get("/mamah", (req, res) => {
  res.send("ini mamah");
});

app.listen(80, () => console.log("server starting..."));
