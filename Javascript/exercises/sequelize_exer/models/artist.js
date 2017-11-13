'use strict';
module.exports = (sequelize, DataTypes) => {
  var artist = sequelize.define('artist', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return artist;
};