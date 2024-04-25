/*Вы создаете интерфейс, где пользователь вводит число.
Ваша задача — проверить, является ли введенное значение числом или нет, и дать
соответствующий ответ.
1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
"Проверить".
2. Добавьте место (например, div) для вывода сообщения пользователю.
3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
должна использовать try и catch для проверки вводимого значения.*/

const but = document.querySelector('.button');
const text = document.querySelector('.input');
const comment = document.querySelector('.comment');
but.addEventListener("click", function number() {
  try {
    const num = text.value;
    if (isNaN(num)) {
      throw new Error("Это не число");
    }
    comment.textContent = "Верно, это число";
  } catch (error) {
    comment.textContent = error.message;


  }
});
