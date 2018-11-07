'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    permission: DataTypes.INTEGER
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};