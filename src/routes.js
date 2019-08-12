const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const ChatController = require("./controllers/ChatController");

const authMiddleware = require("./middleware/auth");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.use(authMiddleware);

routes.get("/users", UserController.index);
routes.post("/message", ChatController.store);

module.exports = routes;