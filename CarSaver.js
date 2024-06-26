const fs = require('fs').promises;
const { Car } = require('./db/models');

class CarSaver {
  //* Метод для чтения файла
  static async loadDataFromFile(filePath) {}

  //* Метод преобразования данных из файла в массив объектов без лишних данных
  static reorganizeData(data) {}

  //* Метод поиска авто со скоростью выше 250км/ч
  static searchFastCars(reorganizedData) {}

  //* Метод записи массива объектов авто в базу данных
  static async writeDataToDB(cars) {}

  //* Метод вывода новых данных из базы (УЖЕ РЕАЛИЗОВАН)
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
