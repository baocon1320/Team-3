'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    item_name: DataTypes.STRING,
    filters: DataTypes.ARRAY(DataTypes.INTEGER),


  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Order, { through: 'ItemOrders', foreignKey: 'itemId' });
  };
  return Item;
};