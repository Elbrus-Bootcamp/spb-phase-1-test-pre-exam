'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate() {}
  }
  Car.init(
    {
      model: DataTypes.STRING,
      max_speed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Car',
    }
  );
  return Car;
};
