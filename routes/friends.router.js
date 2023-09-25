const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

//middleware that logs the ip adress that is requesting data in friends routers
friendsRouter.use((req, res, next) => {
  console.log("ip address: " + req.ip);
  next();
});

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
