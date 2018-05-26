const express = require("express");
const app = express();

app.use(express.static(__dirname + "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    user: {
      name: 'happyudong'
    }
  });
});

// running web server
app.listen(3000, () => {
  console.log("server is running at localhost:3000");
});