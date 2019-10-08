var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

// ------------

 var express = require('express');
 var router = express.Router();

 /* GET users listing. */
 router.get('/', function(req, res, next) {
   res.send('respond with a resource');
 });
 
 // Add a book
router.post("/api/new", function(req, res) {
  console.log("user Data:");
  console.log(req.body);
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    // admin: req.body.genre
  }).then(function(results) {
    res.json(results);
  });
});

// Delete a book
router.delete("/api/book/:id", function(req, res) {
  console.log("Book ID:");
  console.log(req.params.id);
  Book.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.end();
  });
});



// module.exports = router;