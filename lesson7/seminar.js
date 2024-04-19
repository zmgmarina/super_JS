/*Создайте объект Person, представляющий человека, с
следующими свойствами: name, age и gender. Добавьте
также методы introduce и changeName. Метод introduce
должен выводить информацию о человеке, включая его
имя, возраст и пол. Метод changeName должен изменять
имя человека на новое заданное значение.*/ 

const Person = {
    name: 'John',
    age: 25,
    gender: 'male',
    introduse() {
         console.log(`My name is ${this.name}. I'm ${this.age} old and identify as ${this.gender}.`);
    },
    changeName(name) {
        this.name = name;
    }
}

Person.introduse();
Person.changeName('Ben');
Person.introduse();
        
/*Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.*/

const Animal = {
    name:' ',
    eat () {
        console.log(`${this.name} is eating`);
    }
}

Animal.eat();
const Dog = {
    name: 'Rex',
}

Dog.eat = Animal.eat;
Dog.eat();

/*Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2*/

const calculator = {
    add (arg1, arg2) {
        console.log(arg1 + arg2);
    },
    subtract (arg1, arg2) {
        console.log(arg1 - arg2);
    },
    multiply (arg1, arg2) {
        console.log(arg1 * arg2);
    },
}
calculator.add(5,6);
calculator.add.call(null, 5, 3);
calculator.add.apply(null, [5, 3]);
calculator.subtract.apply(null, [5, 3]);

/*Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение с представлением имени и возраста персоны.

person.introduce(); // Вывод: My name is John and I'm 25 years old.*/

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    introduse = () => {
            console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
          };
}
const person = new Persons("John", 25);
person.introduse();

/*Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка.*/


class BankAccount {
static bankName = 'Bank';
   constructor (accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
   };
   deposit = (amount) => {
    this.balance += amount
    console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);

   }
   withdraw = (amount) => {
    this.balance -= amount;

    if(this.balance <= 0){
         console.log("Insufficient funds");
    }else
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance:${this.balance}`);
   }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

