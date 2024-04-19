/*Создайте функцию delayedMessage(message, delay),
которая принимает аргументы message (строка) и delay
(число). Функция должна выводить заданное сообщение в
консоль через указанную задержку.
2. Вызовите функцию delayedMessage() три раза с разными
сообщениями и задержками. Например:
a. delayedMessage("Сообщение 1", 2000)
b. delayedMessage("Сообщение 2", 1000)
c. delayedMessage("Сообщение 3", 3000)
3. После вызова всех функций delayedMessage(), добавьте
сообщение вида "Конец программы" с помощью
console.log()*/

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
delayedMessage("Конец программы", 3500);

/*Есть список задач, которые необходимо выполнить  в определненнои порядке. Написать функцию, которая принимает список задач и выполняет через определенный промежуток.*/

const tasks = [
  { name: "task 1", time: 1000 },
  { name: "task 2", time: 2000 },
  { name: "task 3", time: 3000 },
  { name: "task 4", time: 4000 },
  { name: "task 5", time: 5000 },
];

function performanceOfTasks(tasks) {
  let delay = 0;
  tasks.forEach((task) => {
    setTimeout(() => {
      console.log(task.name);
    }, (delay += task.time));
  });
}
performanceOfTasks(tasks);

/*Напишите программу, которая загружает данные с сервера с
 использованием объекта XMLHttpRequest и отображает полученную
 информацию в консоли.
 1. Создайте функцию loadData(url), которая принимает аргумент url
 (строка) - адрес сервера для загрузки данных.
 2. Внутри функции loadData() создайте объект XMLHttpRequest с
 помощью new XMLHttpRequest().
 3. Зарегистрируйте обработчик события onreadystatechange, который
 будет вызываться при изменении состояния запроса. Проверьте,
 если readyState равен 4 (успешно выполнен запрос) и status равен
 200 (успешный статус ответа сервера), то выведите полученные
 данные в консоль с помощью console.log(xhr.responseText).
 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
 запроса, url - адрес сервера, true - асинхронный режим запроса.
 5. Отправьте запрос на сервер с помощью xhr.send().*/

// XHR GET запрос
// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов.

// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) { // если статус не 200, то произошла ошибка
//         console.log(xhr.responseText);
//         }
//     };
//     xhr.open('GET', url, true);
//     xhr.send();
// }
// loadData('https://api.github.com/users/octocat');

//Метод fetch

// fetch(' https://jsonplaceholder.typicode.com/users')
// .then((result) => {
//   if (result.ok) {
//     return result.text();
//   }
//   throw new Error("Ошибка");
// })
// .then(data => {
//   console.log(data);
// })
// .catch((error) => {
//   console.error(error);
// });

 
