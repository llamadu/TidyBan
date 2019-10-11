var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });

  app.get("/admin", function(req, res){
    // send back admin.html
    res.sendFile(path.join(__dirname, "../public/admin.html"))
  })

  app.get("/chores", function(req, res){
    // send tasks.html
    res.sendFile(path.join(__dirname, "../public/tasks.html"))
  })

};
