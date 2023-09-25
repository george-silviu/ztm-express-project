const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

//initializing the express app
const app = express();

//setting up the template engine used
app.set("view engine", "hbs");
//point to the files were template engine is used
app.set("views", path.join(__dirname, "views"));

//defining our server port
const PORT = 3000;

//logging middleware
app.use((req, res, next) => {
  //get current time in ms
  const start = Date.now();
  //go to the next middleware
  next();
  //after the next middleware finished calculate the time difference
  const delta = Date.now() - start;
  //log the req info
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//sending the relative path of the folder that we want to make available from our server - this is a frontend
//the best apporach to server static files is through CDN, instead of Node
app.use("/site", express.static(path.join(__dirname, "public")));

//allows our server to parse the data in JSON format and get data from req.body
app.use(express.json());

//serving a web page as an hbs express template
app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "My friends are extremely clever",
    caption: "Lets go skiing!",
  });
});
//mounting API routers
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening at port:${PORT}`);
});
