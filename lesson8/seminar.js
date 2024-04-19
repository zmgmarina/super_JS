const Phone = {
  model: "Phone",
  memory: 64,
  power: 500,
  batterySize: 1500,
  incomingСall: function () {
    console.log("The phone is ringing");
  },
};

// Phone.incomingСall();

const PhoneApple = {
  model: "Apple",
  memory: 70,
  batterySize: 1500,
  photo: function () {
    console.log("Phone is photing");
  },
};

console.log(PhoneApple.model);

const PhoneSamsung = {
  model: "Samsung",
  memory: 80,
  batterySize: 2500,
};

Object.setPrototypeOf(PhoneApple, Phone);
Object.setPrototypeOf(PhoneSamsung, PhoneApple);

PhoneApple.incomingСall();

function getPrototypeChain(obj) {
  const array = [];
  let currentObj = obj;
  while (currentObj !== null) {
    array.push(currentObj);
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return array;
}

const prototypeChain = getPrototypeChain(PhoneSamsung);
console.log(prototypeChain);

/*
Создание продуктовой корзины магазина.*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShopingCart {
  constructor(customerName, initialTotalCost) {
    //имя покупателя, начальная общая стоимость заказа(может быть равна 0, если корзина пуста)
    this.customerName = customerName;
    this.totalCost = initialTotalCost;
    this.items = []; //массив наших элементов
  }

  addItem(product, quantity = 1) {
    //метод добавления продуктов в корзину //кол-во продуктов по умолчанию равно 1.
    this.totalCost += product.price * quantity; //общая стоимость продуктов
    this.items.push({product, quantity});
  }

  getCurrentTotalCost() {
    //метод получения текущей общей стоимости заказа
    return this.totalCost;
  }

  checkout() {
    console.log(
      `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`
    );
  }
}

const productOne = new Product('Phone', 50000);
const productTwo = new Product('Bag', 3000);

const shopingCart = new ShopingCart ('Ivan', 0);
shopingCart.addItem(productOne, 2);
shopingCart.addItem(productTwo, 1);

console.log(shopingCart.getCurrentTotalCost());
shopingCart.checkout();


