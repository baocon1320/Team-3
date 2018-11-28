'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auth_Tokens = sequelize.define('Auth_Tokens', {
    token: DataTypes.STRING,
    expirationTime: DataTypes.DATE,
    accountId: DataTypes.INTEGER
  }, {});
  Auth_Tokens.associate = function(models) {
    // associations can be defined here
  };
  return Auth_Tokens;
};