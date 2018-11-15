'use strict';
module.exports = (sequelize, DataTypes) => {
  const General = sequelize.define('General', {
    storeHours: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    storeDescription: DataTypes.TEXT,
    textBody: DataTypes.TEXT
  }, {});
  General.associate = function(models) {
    // associations can be defined here
  };
  return General;
};