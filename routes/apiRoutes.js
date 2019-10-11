var db = require("../models");

module.exports = function(app) {
// Retrieve all users 
app.get('/users', function (req, res) {
  dbConn.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'list of helpers.' });
  });
});
// Retrieve user with id 
app.get('/user/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
   return res.status(400).send({ error: true, message: 'Please provide helper id' });
  }
  dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
   if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'list of helpers.' });
  });
});
// Add a new user  
app.post('/user', function (req, res) {
  let user = req.body.user;
  if (!user) {
    return res.status(400).send({ error:true, message: 'Name, Please!' });
  }
 dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
if (error) throw error;
  return res.send({ error: false, data: results, message: 'We have a new helper!' });
  });
});
//  Update user with id
app.put('/user', function (req, res) {
  let user_id = req.body.user_id;
  let user = req.body.user;
  if (!user_id || !user) {
    return res.status(400).send({ error: user, message: 'Please provide helper and helper name' });
  }
  dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'helper has been updated successfully.' });
   });
  });
  //  Delete user
 app.delete('/user', function (req, res) {
  let user_id = req.body.user_id;
  if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide helper name' });
  }
  dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'helper has been updated successfully.' });
  });
  }); 
//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

// ------------

//  var express = require('express');
//  var router = express.Router();

//  /* GET users listing. */
//  router.get('/', function(req, res, next) {
//    res.send('respond with a resource');
//  });
 
//  // Add a book
// router.post("/api/new", function(req, res) {
//   console.log("user Data:");
//   console.log(req.body);
//   User.create({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     // admin: req.body.genre
//   }).then(function(results) {
//     res.json(results);
//   });
// });

// // Delete a book
// router.delete("/api/book/:id", function(req, res) {
//   console.log("Book ID:");
//   console.log(req.params.id);
//   Book.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function() {
//     res.end();
//   });
 };
