const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const database = require("./config/database");

mongoose.connect(database.url, {
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(cors());

app.use(require("./routes"));

app.listen(process.env.PORT || 3333, () => {
    console.log("Porta 3000");
});