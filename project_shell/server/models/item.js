'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    manufacturer_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};