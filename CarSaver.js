const fs = require('fs').promises;
const { Car } = require('./db/models');

class CarSaver {
  static async loadDataFromFile(filePath) {
    const dataString = await fs.readFile(filePath, 'utf8');
    return dataString;
  }

  static reorganizeData(data) {
    return data
      .split('\n')
      .map((el) => el.split(', '))
      .map((el) => ({ model: el[0], max_speed: el[1] }));
  }

  static searchFastCars(data) {
    return data.filter((car) => car.max_speed >= 250);
  }

  static async writeDataToDB(cars) {
    try {
      await Promise.all(
        cars.map(async (car) => {
          await Car.create(car);
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

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
