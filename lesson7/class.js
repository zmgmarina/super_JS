// // Класс робот-пылесос.
// class RobotVacuumCleaner {
//   // Свойства класса.
//   model = "Romba-1";
//   power = 200;
//   batterySize = 2100;
//   boxSize = 0.5;
//   workTime = 45;
//   counterOfStarts = 0;
//   isFull = false;
//   isObstacle = false;
//   isUVLampOn = false;
//   // Конструктор класса, мы изучим его подробнее на следующем уроке.
//   constructor() {}

//   // Методы класса.
//   startCleaning = () => {
//     this.counterOfStarts++;
//     console.log(
//       "I am cleaning... I have been started: ",
//       this.counterOfStarts,
//       "times."
//     );
//   };
//   goCharge = () => {
//     console.log("I am going to charge...");
//   };
//   switchUVLamp = () => {
//     this.isUVLampOn = !this.isUVLampOn;
//     console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
//   };
// }
// // Создадим экземпляр класса.
// const Roomba = new RobotVacuumCleaner();

// // Обращение к свойствам объекта.
// console.log(Roomba.model); // "Romba-1"
// console.log(Roomba.isFull); // false
// // Отложенный вызов методов объекта.
// setTimeout(Roomba.startCleaning, 1000);
// // Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
// Roomba.isUVLampOn = true;
// setTimeout(Roomba.switchUVLamp, 2000);
// setTimeout(Roomba.goCharge, 3000);
// // I am cleaning... I have started: 1 times.
// // UV lamp is not working.
// // I am going to charge...
