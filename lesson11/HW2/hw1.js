/*Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.
Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {
  #books = [];
  constructor(initBooks) {
    try {
      const uniqueBooks = new Set(initBooks);
      if (uniqueBooks.size !== initBooks.length) {
        throw new Error("Cписок книг содержит дубликаты.");
      }
      this.#books = initBooks;
    } catch (error) {
      console.error("Внимание: дубликаты", error);
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием существует в списке.");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error("Такой книги в списке не существует.");
    } else {
      for (let i = 0; i < this.#books.length; i++) {
        if (this.#books[i] === title) {
          this.#books.splice(i, 1);
        }
      }
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const library = new Library([
  "Bий",
  "Сказки",
  "Война и Мир",
  "Еще какая то книга",
  //   "Сказки", // Error
]);
console.log(library.allBooks);

// library.addBook("Сказки"); //error
library.addBook("Современный учебник JavaScript");
console.log(library.allBooks);
library.removeBook("Сказки");
console.log(library.allBooks);
// library.removeBook("Шерлок Холмс");
const hasBook = library.hasBook("Война и Мир");
console.log(hasBook);
