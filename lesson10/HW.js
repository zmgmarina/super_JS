// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  {
    title: "Bridge",
    artist: "Sting",
    year: "2021",
  },
  {
    title: "X",
    artist: "Ed Sheeran",
    year: "2014",
  },
  {
    title: "Jordi",
    artist: "Maroon 5",
    year: "2021",
  },
];

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: musicCollection[this.current++] }
        : { done: true };
    },
  };
};

for (let albom of musicCollection) {
  console.log(`${albom.title} - ${albom.artist} (${albom.year})`);
}

/* Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда. Необходимо создать систему управления этими заказами, которая позволит:
  
  • Отслеживать, какой повар готовит какое блюдо.
  • Записывать, какие блюда заказал каждый клиент.
  
  Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
  
  Повара и их специализации:
  Виктор - специализация: Пицца.
  Ольга - специализация: Суши.
  Дмитрий - специализация: Десерты.
  
  Блюда и их повара:
  Пицца "Маргариат" - повар: Виктор.
  Пицца "Пепперони" - повар: Виктор.
  Суши "Филадельфия" - повар: Ольга.
  Суши "Калифорния" - повар: Ольга.
  Тирамису - повар: Дмитрий.
  Чизкейк - повар: Дмитрий.
  
  Заказы:
  Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
  Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
  Клиент Ирина заказала: Чизкейк.*/

const cookSpecialization = new Map();
  cookSpecialization.set("Виктор", "Пицца"),
  cookSpecialization.set("Ольга", "Суши"),
  cookSpecialization.set("Дмитрий", "Десерты");

const cookDish = new Map();
cookDish.set(
  "Виктор",
  new Set().add('Пицца "Маргарита"').add('Пицца "Пепперони"')
),

cookDish.set(
  "Ольга",
  new Set().add('Суши "Филадельфия"').add('Суши "Калифорния"')
),
cookDish.set(
  "Дмитрий",
   new Set().add("Тирамису").add("Чизкейк"));
   

const customer1 = {
  name: "Алексей",
};

const customer2 = {
  name: "Мария",
};

const customer3 = {
  name: "Ирина",
};

const customerOrder = new Map();
  customerOrder.set(
  customer1,
  new Set().add('Пицца "Маргарита"').add('Пицца "Пепперони"')
),
  customerOrder.set(
    customer2,
    new Set().add('Суши "Филадельфия"').add('Суши "Калифорния"')
),
  customerOrder.set(
    customer3, new Set().add("Тирамису").add("Чизкейк"));

console.log(
  `Клиент ${[customer1.name]} заказал: ${[...customerOrder.get(customer1)]}`
);
console.log(
  `Клиент ${[customer2.name]} заказал: ${[...customerOrder.get(customer1)]}`
);
console.log(
  `Клиент ${[customer3.name]} заказал: ${[...customerOrder.get(customer1)]}`
);
