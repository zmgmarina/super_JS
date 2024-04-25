// const newWindow = window.open('http://www.google.com', '_blank'); //открывает новое окно браузера
// window.close();//закрывает текущее окно
// window.location.href = 'http://www.google.com'; //перенавравление на другую страницу, оставаясь на это же страничке
// const windowWidth = window.innerWidth; //получаем ширину окна
// console.log(windowWidth);
// const windowHeight = window.innerHeight; //получаем высоту окна
// console.log(windowHeight);

// //объект функции -------------------------

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
// const rect = new Rectangle(10,5);
// console.log(rect.constructor.name); //выводит имя класса

// //стрелочная функция внутри объекта----------------------

// const obj = {
//     regularMethod: function () { //выводит объект obj так как метод вызывается на объекте
//         console.log(this);
//     },
//     arrowMethod: () => { // выводит контекст выполения в котором была создаана стрелочная функция (напр объект Window)
//         console.log(this);
//     }
// }

// obj.regularMethod();
// obj.arrowMethod();

//Защищенное свойство класса ---------------------
//Это не требование языка, а, так называемое, джентльменское
// соглашение между программистами, чтобы отличать такие свойства. Можно убрать сеттер и обратиться напрямую к объекту

// class AutoMobile {
//     _horsePowers = 0; //объявление приватного класса со значением 0

//     set horsePowers(value) {
//         if (value < 0) throw new Error ('Отрицательное количество сил'); //проверка  на отрицательное значение
//         this._horsePowers = value;
//     }

//     get horsePowers() {
//         return this._horsePowers;
//     }

//     constructor(power) {
//         this._horsePowers = power; //установка значения свойств  _horsePowers при создании объекта класса
//     }
// }

// let auto = new AutoMobile(100);

// // auto.horsePowers = -10;
// auto.horsePowers = 10;
// console.log(auto);

//Приватное свойство класса ---------------------
/*В стандарте ECMAScript 2022 были введены приватные свойства класса. Эти
свойства начинаются со знака # и имеют защиту на уровне языка. Устанавливать и читать приватные свойства получится только через сеттер и геттер(свойства аксессоры)
При обращении напрямую нам сгенерируется ошибка.*/
// class AutoMobile {
//     #horsePowers = 0; //объявление приватного класса со значением 0

//     set horsePowers(value) {
//         if (value < 0) throw new Error ('Отрицательное количество сил'); //проверка  на отрицательное значение
//         this.#horsePowers = value;
//     }

//     get horsePowers() {
//         return this.#horsePowers;
//     }

//     constructor(power) {
//         this.#horsePowers = power; //установка значения свойств  _horsePowers при создании объекта класса
//     }
// }

// let auto = new AutoMobile(100);

// // auto.horsePowers = -10;
// auto.horsePowers = 10;
// console.log(auto);

//Оператор instanceof-----------------------
/*Оператор instanceof нам поможет для определения
● Принадлежит ли объект к предлагаемому классу
● Либо к одному из встроенных классов, как в примере с Array
● Или для функций — конструкторов:*/

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('Woof!');
//     }
// }

// const animal = new Animal("Animal");
// const dog = new Dog("Dog");

// console.log(animal instanceof Animal); //true
// console.log(dog instanceof Animal); //true
// console.log(animal instanceof Dog); //false

//Опциональная цепочка вызовов методов и
// оператор нулевого слияния-----------------------------

// const user = {
//     name: 'John',
//     age: 20,
//     address: {
//         city: 'New York',
//         street: '123 Main St'
//     },
//     contact: {
//         email: 'john@mail.com',
//         phone: '+123456789'
//     }
// };

// const streetName  = user?.address?.street ?? 'Нет данных';
// console.log(streetName);

// const mail = user?.contact?.email ?? 'Нет данных';
// console.log(mail);

//Обработка ошибок------------------------------
//Цепочка try, catch, finally

//Работа с делением числа
// function divideNumbers(a, b) {
//   try {
//     const result = a / b;
//     if (isNaN(result)) { //если результат не число
//       throw new Error("Результат не явлется числом");
//     }
//     console.log("Результат деления: ", result);
//   } catch (error) {
//     console.error("Ошибка деления: ", error);
//   } finally {
//     console.log("Операция деления завершена");
//   }
// }
// divideNumbers(10, 5);
// divideNumbers(10, 0);


//Создание пользовательской ошибки---------------------
// class CustomError extends Error {
//     constructor (message){
//         super(message);  //Вызов конструктора родительского класса (Error) с переданным сообщением
//         this.name = 'CustomError';  //Установка имени ошибки
//     }
// }

// function validateNumber(value) {
//     if (typeof value !== 'number'){
//         throw new CustomError('Значение должно быть числом'); //Выбрасывание пользовательской ошибки с сообщением
//     }
//     console.log('Валидация успешна');
// }

// try {
//     validateNumber('42'); //проверка числа с передачей строки вместо числа
// }catch (error) {
//     if (error instanceof CustomError) { //Проверка, является ли ошибка экземпляром пользовательской ошибки
//         console.error('Ошибка', error.message); //вывод сообщения об ошибке
//         console.error('Тип ошибки', error.name); // вывод имени ошибки 
//     } else {
//         console.log('Произошла ошибка:', error); // Вывод сообщения об ошибке по умолчанию
//     }
// }

