'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('task', {
    name: DataTypes.STRING,
    due: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return task;
};