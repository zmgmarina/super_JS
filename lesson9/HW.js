// "Получение данных о пользователе". Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

async function getUserData(ID) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();
  if (responce.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const user = users.find((us) => us.id === ID);
    console.log(
      user === undefined ? `Пользователь c ID ${ID} не найден` : user
    );
  }
}

getUserData(15);
getUserData(2);

// ""Отправка данных на сервер""   Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением

const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

function saveUserData(user) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

saveUserData(user);

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
// Пример использования функции


function changeStyleDelayed(id, interval) {
  const elem = document.getElementById(id);
  setTimeout(() => {
    elem.style.color = "red";
  }, interval);
}

changeStyleDelayed('myElement', 2000); 

