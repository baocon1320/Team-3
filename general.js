'use strict';
module.exports = (sequelize, DataTypes) => {
  const General = sequelize.define('General', {
    storeHours: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    storeAddress: DataTypes.STRING,
    storeDescription: DataTypes.TEXT,
    generalTextBody: DataTypes.TEXT
  }, {});
  General.associate = function(models) {
    // associations can be defined here
  };
  return General;
};
