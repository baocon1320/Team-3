'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    username: { type: DataTypes.STRING, unique: true, allowNull: false},
    password:{ type:DataTypes.STRING,allowNull: false},
    permission: {type:DataTypes.INTEGER, allowNull: false}
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};