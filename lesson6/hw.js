// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounte() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}
const counter = createCounte();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log("Count: " + counter.getCount());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, classEl) {
  const serchElement = [];
  for (let element of root.childNodes) {
    if (element.className === classEl) {
      serchElement.push(element);
      return element;
   }
    findElementByClass(element, classEl);
  }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
