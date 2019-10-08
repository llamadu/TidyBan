module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      admin: DataType.BOOLEAN,
    }, {
      instanceMethods: {
        countTasks: function() {
          // how to implement this method ?
        }
      }
    });
  };