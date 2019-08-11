const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const authMiddleware = require('./middleware/auth')
const database = require('./config/database')

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')

mongoose.connect(database.url, {
    useNewUrlParser: true
})


app.use(bodyParser.json())


app.post('/signup', UserController.store)
app.post('/signin', SessionController.store)

app.use(authMiddleware)

//Rotas Depois do Auth
app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Porta 3000');

})