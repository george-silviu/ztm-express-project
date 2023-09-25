const path = require("path"); // /folder/files.jpg  ->windows \folder\file.jpeg

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends",
    friend: "Albert Einstein",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // ); //must provide absolute path when sending files
  // res.send("<ul><li>Hello Albert</li></ul>");
}

function postMessage(req, res) {
  console.log("updating messages...");
}

module.exports = { getMessages, postMessage };
