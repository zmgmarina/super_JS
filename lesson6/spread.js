const studentsGroup1PracticeTime = [
  // первая группа студентов
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];

const studentsGroup2PracticeTime = [
  //вторая группа
  {
    firstName: "Mankov",
    practiceTime: 87,
  },
  {
    firstName: "Kistin",
    practiceTime: 133,
  },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];

function findMax() {
  const values = arguments; // arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию (псевдомассив)
  let maxValue = -Infinity;

  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}

const group1PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
const group2PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);

const maxTimeFromGroup1 = findMax(...group1PracticeTime); //...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию как отдельные переменные.

console.log(group1PracticeTime);
console.log(group2PracticeTime);

console.log(maxTimeFromGroup1);

// Давайте также найдем максимально отработанное время среди двух групп
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];

console.log(bothGroupsTime);

// const maxTimeBothGroups = findMax(...bothGroupsTime);
const maxTimeBothGroups = Math.max(...bothGroupsTime); // или так
console.log(maxTimeBothGroups);

//rest
let scores = ["98", "95", "93", "90", "87", "85"];
let [first, second, third, ...rest] = scores;

console.log(first); // 98
console.log(second); // 95
console.log(third); // 93
console.log(rest); // [90, 87, 85]

// перестановка деструктуризацией массива
let a = 2;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 2

//ЧИСТЫЕ ФУНКЦИИ

const student = {
  name: "Ivan",
  age: 25,
};

const getYearOfBith = (currentYear) => {
  return currentYear - student.age;
};
console.log(getYearOfBith(2024));

// Чистая версия функции. Берет данные только из своих аргументов.
const getYearOfBithPureVersion = (age, currentYear) => {
  return currentYear - age;
};
console.log(getYearOfBithPureVersion(24, 2024));

//еще пример чистой функции
// Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа, и значение, которое надо добавить.
const addField = (object, key, value) => {
  object[key] = value;
  return object;
};

const updatedStudent = addField(student, "lastName", "Belkin"); //вызвав нашу функцию добавления поля, мы изменили начальный объект, что может привести к нежелательным последствиям в остальном коде
console.log(student);
console.log(updatedStudent);

// Чистый вариант функции - нам нужно создать новый объект внутри функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
  return {
    // возвращаем новый объект.
    ...object, // Воспользуемся оператором spread, для получения копии свойств исходного объекта.
    [key]: value, // Добавим новое свойство.
  };
};
const updatedStudentPure = addFieldPureVersion(student, "practiceTime", 148);
console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"}  - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25, lastName: "Belkin", practiceTime: 148}

//ЗАМЫКАНИЯ

const createCounter = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};
// Создаем счетчик.
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

//Создадим еще один счетчик. Каждый будет работать независимо. У каждой кнопки будет свой счетчик
const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter1()); // 3
console.log(counter1()); // 4

// Бывают функцию, которые делают сложные расчеты, поэтому имеет смысл сохранять результат расчета с привязкой к аргументам, с которыми была вызвана функция, чтобы если функция будет вызвана с такими
// аргументами повторно, можно было взять уже готовый результат. Для примера возьмем функцию вычисления квадрата числа:

const closureFunction = () => {
  const cache = {}; //создаем кэш - это пустой объект
  return (x) => {
    if (cache[x]) return cache[x]; //если было значение, возвращаем его
    const result = x * x; //иначе умножаем на себя и кладем результат в кэш и возвращаем результат 
    cache[x] = result;
    return result;
  };
};

const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
chachedPow(2); // 4

/*Ещё один пример использования замыкания — это сокрытие переменных внутри
подключаемых модулей. Мы можем подключить на страницу много внешних
скриптов, и каждый такой скрипт будет определять свои переменные, которые в
какой-то момент могут совпасть с переменными из другого скрипта, и всё
сломается. Именно поэтому придумали скрывать необходимые скрипту
переменные внутри модуля (замыкания).*/
(function () {
    const sliderTexts = ['Promo', 'Brands', 'Best'];
    function showSlider(texts) {
    console.log(texts[0]);
    console.log(texts[1]);
    console.log(texts[2]);
    }
    showSlider(sliderTexts);
    }());

