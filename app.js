const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/feasto";

main()
.then( () => {
    console.log("Connect to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) =>{
    res.send("i'm root!!");
});

app.get("/home", (req, res) => {
    res.send("its home page");
});

app.listen(8080, (req, res) => {
    console.log("Server listining to 8080");
});