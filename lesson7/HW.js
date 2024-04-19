//Задание 1: 

class Book {
  constructor(title, author, pages = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo = () => {
    console.log(
      `Название книги ${this.title}, автор ${this.author}, ${this.pages} страниц`
    );
  }
}

const someBook = new Book("Some Book", "A.A. Author", 100);
someBook.displayInfo();


//Задание 2:

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo = () =>{
    console.log(
    `Name: ${this.name}
    Age: ${this.age}
    Grade: ${this.grade}`
    );
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

