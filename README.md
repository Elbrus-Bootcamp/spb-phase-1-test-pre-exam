# Завдание: Система для дилерского центра

**NOTE:** К нам обратился владелец дилерского центра по продаже спортивных автомобилей с проблемой: ему постоянно присылают файлы в расширении txt с большими списками машин на потенциальную продажу, и ему приходится буквально глазами смотреть эти списки и искать там машины, у которых максимальная скорость выше 250км/ч. Он попросил нас реализовать логику чтения таких файлов, поиска в них нужных машин и записи этих машин в его базу данных.

**TODO:** Реализовать методы в классе `CarSaver`, которые позволят читать файл с автомобилями, искать в нем автомобили с необходимой максимальной скоростью и записывать их в базу данных.

## Релиз - 1: База данных

Sequelize уже проинициализирован в папке db, связи в миграциях и моделях уже есть. Сиды также готовы, но самой базы нет. Нужно на основе данных в папке db создать базу данных, накатить миграции и сиды.

## Релиз - 2: Разобрать файл `./main.js`

Это главная точка входа в наше мини-приложение, в нем уже прописано ожидаемое поведение от методов класса `CarSaver`, внимательно прочитай, чем занимается каждый метод и заведи в классе `CarSaver` эти методы.

## Релиз - 3: Реализация чтения файла в методе `loadDataFromFile` в `CarSaver.js`

## Релиз - 4: Реализация преобразования данных в массив объектов и очистки от лишних данных в методе `reorganizeData` в `CarSaver.js` (данные в файле хранят информацию ненужную для записи в БД, её нужно убрать и оставить только ключи `model` и `max_speed`)

## Релиз - 5: Реализация поиска машин с максимальной скоростью выше 250км/ч в методе `searchFastCars` в `CarSaver.js`

## Релиз - 6: Реализация записи данных в базу в методе `CarSaver.js`