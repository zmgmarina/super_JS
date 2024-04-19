/*Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).*/

class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo = () => {
    console.log(this.name);
  };
}


class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo = () => {
    console.log(`        Name: ${this.name}
        Department: ${this.department}`);
  };
}

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

/* Задание 2. "Управление списком заказов"

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.*/

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Order extends Product{
//     constructor(product, orderNumber){
//     super(product);
//     this.orderNumber = orderNumber;
//     this.products = [];
//     }
    
//     addProduct = (product) => {
//         this.products.push(product);
//     };

//     getTotalPrice = () => {
//        let sum = 0;
//        for (const prod in this.products) {
//            sum += this.products[prod].price;
//        } return sum;
//     }
// }

// const order = new Order(12345);
// const product1 = new Product("Phone", 500);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); 













