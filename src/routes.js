const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.post('/signup', UserController.store)

module.exports = routes