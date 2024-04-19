let buddies = {
  [Symbol("Жучка")]: "Жучка",
  [Symbol("Мурка")]: "Мурка",
  [Symbol("Барсик")]: "Барсик",
  сat: "сat",
};
console.log(buddies);

let newBuddies = {};
Object.assign(newBuddies, buddies); // создает копию объекта , включая симболы

console.log(newBuddies);

//-------------Symbol.for---------------читаем символ из глобального реестра и записываем в переменную, если символа не существует он будет создан
let id = Symbol.for("cat");
console.log(id); //Symbol(cat)

//---Symbol.keyFor-----------получаем имя по символу
console.log(Symbol.keyFor(id)); // cat

// -------------Итерируемые объекты --------------------

let range = {
  from: 1,
  to: 10,
};

//1. Вызов for-of  сначала вызывает эту функцию
range[Symbol.iterator] = function () {
  // она возвращает объект итератора
  //2. Далее  for-of работает только с этим итератором, запрашивая новые значения
  return {
    current: this.from,
    last: this.to,
    //3. next() вызывается на каждой итерации цикла for-of
    next() {
      return this.current <= this.last
        ? { done: false, value: this.current++ }
        : { done: true };
    },
  };
};

for (let number of range) {
  console.log(number);
}

//------------Array.from--------------
let obj = {
  0: "zero",
  1: "one",
  2: "two",
  length: 3,
};

let array = Array.from(obj);
console.log(array);
console.log(array.pop());

let string = "Hello!";
let arrayString = Array.from(string);
console.log(arrayString);

//-------------Map и Set---------------

let map = new Map();
map.set("1", "str").set(1, "num").set(true, "bool");

console.log(map);
console.log(map.get(1));
console.log(map.size);

//Перебор коллекции

let cart = new Map([
    ["огурец", 500],
    ["помидор", 300],
    ["лук", 150]
]);
console.log(cart); // {'огурец' => 500, 'помидор' => 300, 'лук' => 150}

for (let prod of cart.keys()) { //огурец помидор лук
    console.log(prod);
}

for (let prod of cart.values()) {
    console.log(prod);
}

//перебор пор элемента [ключ, значение]

for (let entry of cart) {
    console.log(entry); // ['огурец', 500] и тд
}

cart.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); //огурец: 500
});


//------------Работа с объектами---------------

let mapObg = new Map(Object.entries(obj));  // преобразование объекта в map
console.log(mapObg); //{'0' => 'zero', '1' => 'one', '2' => 'two', 'length' => 3}


//-----------------Set----------------------

let buddis = [
    'Жучка', 'Внучка', 'Дедка', 'Бабка', 'Кошка', 'Мышка','Бабка', 'Кошка', 'Мышка'
]

let setBu = new Set(buddis);
console.log(setBu);

//из set  обратно в массив(избавились от дубликатов)
let arr = Array.from(setBu);
console.log(arr);

//--------------МОДУЛИ------------------
