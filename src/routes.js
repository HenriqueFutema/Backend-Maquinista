const express = require('express')
const app = express()
const routes = express.Router()

const authMiddleware = require('./middleware/auth')

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')


routes.post('/signup', UserController.store)
routes.post('/signin', SessionController.store)

app.use(authMiddleware)

module.exports = routes