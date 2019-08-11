const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const database = require('./config/database')

mongoose.connect(database.url, {
    useNewUrlParser: true
})

app.use(bodyParser.json())

app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Porta 3000');

})