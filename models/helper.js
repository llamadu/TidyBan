'use strict';
module.exports = (sequelize, DataTypes) => {
  var Helper = sequelize.define('Helper', {
    name: DataTypes.STRING
    allowNull: false,
      validate:{
          len:[20]
  };

  Helper.associate = function(models) {
    models.Helper.hasMany(models.Task),
    onDelete: "cascade";

  return Helper;
};
