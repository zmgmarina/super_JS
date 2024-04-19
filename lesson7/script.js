// Объект робот-пылесос.
const Roomba = {
  // Есть негласное правило называть объекты валгоритмах с большой буквы.
  // Обычно сначала объявляют свойства объекта.
  model: "Romba-1",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,

  startCleaning: function () {
    // После свойств объявляют его методы.
    this.counterOfStarts++;
    console.log(
      "I am cleaning... I have been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: function () {
    console.log("I am going to charge...");
  },
  switchUVLamp: function () {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
  },
};

// Объект робот-пылесос модель Tango.
const Tango = {
  model: "Tango-1",
  power: 300,
  batterySize: 3200,
  boxSize: 0.7,
  workTime: 60,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // После свойств объявляют его методы. А так как методы у новой модели такие же как и у старой, давайте позаимствуем их у объекта Roomba.
  startCleaning: Roomba.startCleaning,
  goCharge: Roomba.goCharge,
  switchUVLamp: Roomba.switchUVLamp,
};

//Одалживание метода
// Объект робот-пылесос модель Samba.
const Samba = {
  model: "Samba-1",
  power: 250,
  batterySize: 2500,
  boxSize: 0.5,
  workTime: 50,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // На этот раз мы не будем создавать методы в объекте, мы постараемся их заимствовать непосредственно перед использованием.
};
// Одолжим методы из объекта Roomba.
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;
// Вызов методов объекта.
Samba.startCleaning(); // 'I am cleaning... I have been started: times.'
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Samba.startCleaning();
Samba.startCleaning();

Samba.isUVLampOn = true;

//Привязка контекста
setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have started: NaN times
Roomba.isUVLampOn = true; // // UV lamp is working.

// Когда мы вызывали методы объекта напрямую, после его создания,
// функция вызывалась имея возможность получить доступ к объекту, но когда
// функция вызывается внутри метода setTimeout, то эта функция теряет доступ к
// своему объекту, и ключевое слово this в такой функции получает значение
// undefined.
//Один из вариантов обернуть метод в анонимную функцию, и вызвать в ней, тогда эта анонимная функция в своем лексическом окружении сохранит ссылку на объект, из которого наш метод будет вызываться
setTimeout(function () {
  Roomba.startCleaning();
}, 1000); //I am cleaning... I have been started:  1 times.
//но это костыльное решение

// метод для привязки контекста это bind (от английского bind - связывать) - это самый часто используемый метод, т.к. позволяет привязать контекст к функции раз и навсегда, его нужно вызвать для необходимой нам функции и передать в него единственный аргумент - объект в контексте которого мы хотим в дальнейшем вызывать нашу функцию.

setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I am cleaning... I have been started: 1 times.



//Стрелочная функция
const Romba = {
  model: "Romba-1",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // // После свойств объявляют его методы.
  startCleaning: () => {
    this.counterOfStarts++;
    console.log(
      "I am cleaning... I have started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: () => {
    console.log("I am going to charge...");
  },
  switchUVLamp: () => {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
  },
};
//Если мы объявим методы в виде стрлочных функци, такие методы не будут работать, т.к
// в спецификации ES2015, где сказано что у стрелочных функций нет своего контекста, в них this ссылается на тот же объект, который является контекстом для функции выше, в которой эта функция объявлена.
// Получается в нашем случае this внутри методов будет ссылаться на глобальный
// объект, и методы call, apply и bind не помогут нам переопределить этот контекст.

// Cтрелочные функции очень удобны когда используются как анонимные функции внутри методов, т.к. мы можем использовать в них this из самого метода

const Stand = {
  model: "Stand-1",
  robots: ["Roomba-1", "Tango-1", "Samba-1", "Roomba-2"],
  // Метод, с использованием стрелочной функции в качестве функции обратного вызова.
  startTestingArrow: function () {
    console.log("Start testing...");
    this.robots.forEach((value) => {
      console.log("stand: ", this.model, "is testing robot: ", value);
    });
  },
};
Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
// классическая функция в этом случае работать не будет
