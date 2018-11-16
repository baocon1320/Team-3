'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customerName: DataTypes.STRING,
    creditCardNum: DataTypes.STRING,
    securityCode: DataTypes.INTEGER,
    priceTotal: DataTypes.DOUBLE,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};