require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const favicon = require("serve-favicon");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const _ = require("lodash");
const e = require("express");

const app = express();
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function makeRandomLetters() {
  var t = "";
  for (let i = 0; i < 10; i++) {
    let stuff = String.fromCharCode(randomInt(65, 90));
    t += stuff;
  }
  return t;
}
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/upload/", (req, res) => {
  try {
    if (req.headers.key !== process.env.TOKEN) {
      return res.status(403).send({ status: 403, message: "Invalid token" });
    } else {
      if (!req.files) {
        res.status(404).send({
          status: 404,
          message: "No file uploaded",
        });
      } else {
        let avatar = req.files.sharex;
        let specialLetters = makeRandomLetters();
        avatar.mv("./uploads/" + specialLetters + "-" + avatar.name);
        //send response
        res.send({
          status: 200,
          message: "File just got uploaded!",
          url: specialLetters + "-" + avatar.name,
        });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/:file", (req, res) => {
  var path = __dirname + "/uploads/" + req.params.file;
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      res.status(404).sendFile(__dirname + "/public/404.png");
    } else {
      res.sendFile(__dirname + "/uploads/" + req.params.file);
    }
  });
});

app.listen(3000, () => console.log("Wabz Uploader on"));
