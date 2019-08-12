const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ChatController = require("./controllers/ChatController");

routes.get("/users", UserController.index);
routes.post("/message", ChatController.store);

module.exports = routes;