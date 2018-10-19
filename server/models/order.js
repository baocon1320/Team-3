'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userName: DataTypes.STRING,
    destination: DataTypes.STRING,
    creditCard: DataTypes.INTEGER,
    securityCode: DataTypes.INTEGER,
    expDate: DataTypes.INTEGER,

    priceTotal: DataTypes.DOUBLE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
