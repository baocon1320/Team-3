'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Manufacturer.associate = function(models) {
    // associations can be defined here
  };
  return Manufacturer;
};