const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const ChatController = require("./controllers/ChatController");
const MessageController = require("./controllers/MessageController");

const authMiddleware = require("./middleware/auth");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.get("/users", UserController.index);
routes.post("/message", ChatController.store);

routes.post("/chat/msg", MessageController.store);
routes.get("/chat/:id", UserController.show);

module.exports = routes;