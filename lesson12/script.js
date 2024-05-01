//Напишите функцию, которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке.
// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 reject('Ошибка генерации случайного числа');
//             }
//         }, 1000);
// });
// };

// generateRandomNumber()
//     .then((number) => {
//         console.log('Сгенерировано случайное число:', number);
//     })
//     .catch((error) => {
//         console.log('Ошибка', error);
//     });

//Напишите функцию fethData(url), которая принимает  URL в качестве аргумента и возвращает промис, выполняющий запрос данных по указанному URL. Если запрос успешен, промис должен резолвить полученные данные. В случае ошибки запроса, промис должен быть отклонен  сообщением об ошибке.

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject('Ошибка загрузки данных'));
//     });
// };

// fetchData('https://randombig.cat/roar.json')
// .then((data) => {
//     console.log('Получены даннные', data);
// })
// .catch((error) => {
//     console.log('Ошибка', error);
// })

//Напишите функцию checkFileExists(file), которая принимает имя файла  и возвращает промис, воолняющийся через 2сек. Промис должен разолвиться если файл существует и отклониться если файла нет.

let checkFileExists = (file) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fileExists = checkFileExists(file); //НЕПОНЯТНО КАК РАБОТАЕТ ЭТА ФУНКЦИЯ???
      if (fileExists) {
        resolve("Файл существует");
      } else {
        reject("Файл не существует");
      }
    }, 2000);
  });
};

checkFileExists("file.js")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Ошибка", error);
  });

//THEN  Напишите функцию calculateSum(a,b), которая принимает два числа в качестве аргументов и возвращает промис. Промис должен быть выполнен суммой двух чисел.

let calculateSum = (a, b) => {
  return new Promise((resolve, reject) => {
    const sum = a + b;
    resolve(sum);
  });
};

calculateSum("mfmb,b", 3).then((result) => {
  //в данном коде проверки нет, не рекомендуется так делать
  console.log("Сумма чисел =", result);
});

//функция деления

let divideNumber = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("На ноль делить нельзя");
    } else {
      resolve(a / b);
    }
  });
};

divideNumber(4, 0)
  .then((result) => {
    console.log("Результат деления:", result);
  })
  .catch((error) => {
    console.log("Ошибка", error);
  });

//Цепочки промисов  Можно использовать например в банке: получили какую то сумму, сложили, высчитали процент, получили бонусы и тд.

new Promise(function (resolve) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 3), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });

// Promise.all()
//приниамет массив промисов и возвращает новый массив если в одном из промисов произойдет ошибка, то результатом будет ошибка, остальные рехультаты игнорируются
//Массив применяется когда важно чтобы вся цепочка задачь была выполнена, например выплата зарплаты сотрудникам
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(new Error('Ошибка')), 2000)), //ошибка
new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
.then(console.log)
.catch(console.log);
 // мы разрабатывем приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Функция checkServerResponse  принимает массив URL адресов и возвращает промис. Промис дб выполнен с URL адресом сервера, который первым ответил на запрос.

 let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises) //Статический Promise.race()метод принимает в качестве входных данных итерацию обещаний и возвращает один Promise. 
    .then((response) => {
        return response.url;
    });
 };

 let urls = [
    'https://api.example.com/server1',
    'https://api.example.com/server2',
    'https://api.example.com/server3'
 ];

 checkServerResponse(urls)
 .then((fastestServer) => {
    console.log('Самый быстрый сервер', fastestServer);
 })
 .catch((error) => {
    console.log('Ошибка', error);
 });

 //Cookie – это строки с данными, которые хранятся в браузере. Куки устанавливаются веб-сервером. Устанавливаются с помощью  HTTP-заголовка Set-Cookie, затем браузер их будет вставлять во все запросы с помощью заголовка Cookie. Куки имеют максимальный объём данных 4Кб для одной пары ключ-значение, поэтому много информации записать в них не получится. 

 //Функция setCookie(name, value, days) устанавливает кукки с указанным именем, значением и сроком действия в днях.
 
 let setCookie = (name, value, days) => {
    let experationDate = new Date();
    experationDate.setDate(experationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + "; expires=" + experationDate.toUTCString();
    document.cookie = name + "=" + cookieValue;
 };
 
 setCookie('username', 'John Doe', 7);
 setCookie('userinfo', 'Mister', 3);

//функция getCookie(name) возвращает значение кукки

let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie('username');
console.log(username);

//функция удаления cookie с указанным именем

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

deleteCookie('userinfo'); //почему то не реаботает

//Storage
/* LocalStorage и SessionStorage представляют собой
хранилище браузера, в которое мы по своему усмотрению
можем записать и считать данные из любого места
скрипта.
В отличие от cookie, они никак не зависят от наличия
сервера и хранить можно гораздо больше данных.
Данные LocalStorage не удаляются при закрытии браузера
и хранятся там, пока какое-то событие их не изменит
или не очистит.
При обновлении страницы данные сохранятся,
но при закрытии браузера или вкладки удаляются.
С этим и связано весьма ограниченное использование
SessionStorage.

setItem(ключ, значение) – сохранить элемент с ключом «ключ» и данными «значение»
getItem(ключ) – получить значение по ключу
removeItem(ключ) – удалить пару «ключ» и «значение» по заданному ключу
key(номер позиции) – получить ключ на заданной позиции
length – количество элементов в хранилище
clear() – очистка хранилища
*/


localStorage.setItem('username', 'John'); //установка значения

let storegUsername = localStorage.getItem('username'); //получение значения
console.log('Значение из localStorage', storegUsername);

localStorage.removeItem('username'); //удаление значения

//проверка что значение удалено
let storegUsername2 = localStorage.getItem('username');
console.log('Значение из localStorage', storegUsername2); //null

//Проверка что localStorage пустой
console.log('localStorage', localStorage);

//Счетчик----------------------------------------
//Проверяем, есть ли значение счетчика в localStorage
if (localStorage.getItem('counter2')) {
    //если счетчик есть увеличиваем на 1
    let counter = parseInt(localStorage.getItem('counter2')) + 1;
    localStorage.setItem('counter2', counter.toString());    
} else {
    // если значение счетчика не существует, устанавливаем его в 1
    localStorage.setItem('counter2', 1);
}

console.log('Счетчик посещений:', localStorage.getItem('counter2'));

// localStorage.clear(); 



//проверяем есть ли значение счетчика, если есть подставляем значение counter'a parseInt... если нет - 0
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

//обновялем значение счетчика и сохраняем его в localStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

//выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

//обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
  updateCounter();
  document.querySelector('.counter').textContent = counter;
});


//Генератор для генерации последовательности чисел----------------------

function* numberGenerator() {
  let number = 1;

  while (true) {
    yield number;
    number++;
  }
}

//Создаем экземпляр генератора
const generator = numberGenerator();

console.log(generator.next().value); //1