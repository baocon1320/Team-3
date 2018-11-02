'use strict';
const Item = require('./item');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userName: DataTypes.STRING,
    destination: DataTypes.STRING,
    creditCard: DataTypes.INTEGER,
    securityCode: DataTypes.INTEGER,
    expDate: DataTypes.INTEGER,
    priceTotal: DataTypes.DOUBLE,
    order_id: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsToMany(Item, { through: 'ItemOrders', foreignKey: 'orderId' });
  };
  return Order;
};