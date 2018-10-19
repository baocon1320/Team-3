'use strict';
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define('account', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    permission: DataTypes.INTEGER
  }, {});
  account.associate = function(models) {
    // associations can be defined here
  };
  return account;
};