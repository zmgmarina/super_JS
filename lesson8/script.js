// Объект робот-пылесос.
const VacuumCleaner = {
  Model: "vacuum cleaner",
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log(
      "I am cleaning... I have been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log("I am going to charge...");
  },
};


// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.
const DancingSeries = {
    // Объявляем новые свойства и переопределить свойство model.
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод.
    switchUVLamp: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of DancingSeries');
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
    'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
    };
    /*Наш новый объект DancingSeries - это тоже некий общий объект для создания
серии пылесосов с одинаковым функционалом, и разными характеристиками.
4
Далее на основе него мы уже можем создать несколько конкретных моделей
пылесосов, переписав в них характеристики. Давайте создадим робот Samba:*/
const Samba = {
    // Обновляем свойства под конкретную модель.
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
    };
    
    // Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

/*Все свойства и методы доступны при обращении к объекту Samba, и как мы можем
видеть, когда их нет в самом объекте движок JavaScript пытается найти их в
родительском объекте, который указан в свойстве __proto__, и будет искать по
цепочки прототипов пока не найдёт, либо получит undefined, если свойство или
метод не будет найдено даже в самом верхнем объекте Object.*/


// Объект робот-пылесос.
const Djaiv = {
    // Обновляем свойства под конкретную модель.
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning.
    startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of Djaiv');
    console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: DancingSeries,
    };
    

/*Метод getPrototypeOf позволяет получить ссылку на объект прототип*/
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto =
Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

/*Для установки прототипа используем
метод setPrototypeOf - он принимает два аргумента, первый это объект для
которого устанавливается прототип, второй - это объект который будет прототипом
для первого.*/
// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of MusicSeries');
    console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
    };
    // Объект робот-пылесос.
    const MusicSeriess = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log('I am the method of MusicSeries');
    console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
    };

    // Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    };
    // Установим прототип для робота.
    Object.setPrototypeOf(Blues, MusicSeriess);
    /*Теперь можем попробовать вызвать методы наших роботов, проверяя кто является
их прототипом:*/
if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning(); //
    }
    if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe(); //
    }
    // Если мы не будем проверять прототип и просто вызовем метод
    //чужого прототипа мы, естественно, получим ошибку.
    // Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function
    
