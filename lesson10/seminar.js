// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль

//функция для добавления метаданных к объектам
function addMetadata(book, metaDataType, data) {
  if (data === " ") {
    console.log("Пустое значение");
  } else {
    book[metaDataType] = [data];
    console.log("Данные успешно добавлены");
  }
}

//функция для извлечения метаданных из объекта
function getMetadata(book, metaDataType) {
  return book[metaDataType];
}

const book = {
  title: "Идиот",
  author: "Федор Достоевский",
};

const reviewSymbol = Symbol("review");
const ratingSimbol = Symbol("rating");
const tagSymbol = Symbol("tags");

console.log(ratingSimbol);

addMetadata(book, reviewSymbol, " ");
addMetadata(book, ratingSimbol, 5);
addMetadata(book, tagSymbol, "idiot");
console.log(book);

addMetadata(book, reviewSymbol, "Рекомендую к прочтению");
console.log(book);

// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.

// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
];

books[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    //3. next() вызывается на каждой итерации цикла for-of
    next() {
      return this.current < this.to
        ? {done: false, value: books[this.current++]}
        : {done: true };
    },
  };
};

for (let book of books) {
  console.log(book);
}



// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Дан код html:
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.


const divElevents = Array.from(document.querySelectorAll('div')); // преобразование списка элементов в массив

const activeDivs = divElevents.filter(element => element.hasAttribute('data-active'));
// или так ============
// const activeDivs = divElevents.filter(element => element.dataset.active);

console.log(divElevents);

activeDivs.forEach(element => {
  console.log(element);
})

// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент.


// 1. Map: урок => преподаватель ("Математика", "Смирнов"), ("История", "Иванова")
 const lessons = new Map([
  ["Математика", "Смирнов"],
  ["История", "Иванова"]
]);

// 2. Map: студент => Set уроков

const student = new Map([
  ["Иван", new Set().add("Математика")
                    .add("История")]
]);
// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); //Смирнов
console.log(`Уроки Ивана: ${[...student.get("Иван")]}`);

