const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/sports", (req, res) => {
  const sports = [];
  sports[0] = {
    name: "Baseball",
    players: 9,
    pace: "slow",
    scoring: "low",
    teams: 30,
    img: "images/baseball.jpg",
  };
  sports[1] = {
    name: "Basketball",
    players: 5,
    pace: "fast",
    scoring: "high",
    teams: 30,
    img: "images/basketball.jpg",
  };
  sports[2] = {
    name: "Football",
    players: 11,
    pace: "medium",
    scoring: "medium",
    teams: 32,
    img: "images/football.jpg",
  };
  sports[3] = {
    name: "Hockey",
    players: 5,
    pace: "fast",
    scoring: "low",
    teams: 32,
    img: "images/hockey.jpg",
  };
  sports[4] = {
    name: "Soccer",
    players: 11,
    pace: "medium",
    scoring: "low",
    teams: 29,
    img: "images/soccer.jpg",
  };

  res.json(sports);
});

app.listen(3000, () => {
  console.log("listening");
});