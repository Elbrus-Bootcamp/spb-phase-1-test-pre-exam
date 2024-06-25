const fs = require('fs').promises;
const { Car } = require('./db/models');

class CarSaver {
  static async loadDataFromFile(filePath) {}

  static reorganizeData(data) {}

  static searchFastCars(reorganizedData) {}

  static async writeDataToDB(cars) {}

  static async getCarsDataFromDB() {
    try {
      const allCars = await Car.findAll({ raw: true });
      console.log(allCars);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CarSaver;
