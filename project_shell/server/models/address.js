'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    streetOne: DataTypes.STRING,
    streetTwo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};