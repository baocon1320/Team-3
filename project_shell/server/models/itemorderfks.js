'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemOrderFKs = sequelize.define('ItemOrderFKs', {
    item_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    item_price: DataTypes.DOUBLE
  }, {});
  ItemOrderFKs.associate = function(models) {
    // associations can be defined here
  };
  return ItemOrderFKs;
};