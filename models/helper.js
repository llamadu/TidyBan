'use strict';
module.exports = (sequelize, DataTypes) => {
  var Helper = sequelize.define('Helper', {
    name: DataTypes.STRING
  });

  return Helper;
};