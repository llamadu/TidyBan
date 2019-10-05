"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// ===================


// https://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html code below

// ================ 

// var Sequelize = require('sequelize');
// var config    = require('config').database;  // we use node-config to handle environments

// // initialize database connection
// var sequelize = new Sequelize(
//   config.name,
//   config.username,
//   config.password,
//   config.options
// );

// // load models
// var models = [
//   'Task',
//   'User'
// ];
// models.forEach(function(model) {
//   module.exports[model] = sequelize.import(__dirname + '/' + model);
// });

// // describe relationships
// (function(m) {
//   m.Task.belongsTo(m.User);
//   m.User.hasMany(m.Task);
// })(module.exports);

// // export connection
// module.exports.sequelize = sequelize;