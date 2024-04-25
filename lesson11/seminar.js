/*создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.

*/

// class BankAccount {
//     #_balance;

//     get balance () { //геттер balance, который позволит получить информацию о текущем балансе.
//         return this.#_balance;
//     }

//     constructor (balance) {
//         if (balance < 0) {
//             throw new Error('Баланс не может быть отрицательным')
//         }
//         this.#_balance = balance;
//     }

//     deposit (amount) {
//         if (amount < 0) {
//             throw new Error('Количество вносимых средств не может быть отрицательным');
//         }
//         this.#_balance += amount;
//     }

//     withdraw(amount) {
//          if (amount > this.#_balance){
//             throw new Error('Сумма снимаемых средств превышает баланс счета');
//         }
//         this.#_balance -= amount;
//     }
// }

// //создаем новый банк. счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log('На счету: ', account.balance); // 500
// account.deposit(300);
// account.withdraw(600);
// console.log(account.balance);

/*Задача – создать структуру классов для пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.*/

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }

// class PremiumUser extends User {
//   premiumAccount = null;

//   setPremiumAccount() {
//     this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); //установка срока действия на год вперед
//   }
// }

// class RegularUser extends User {}

// function getAccountInfo(user) {
//   if (user instanceof User) {
//     return user?.premiumAccount ?? "У пользователя нет премиум-аккаунта";
//   } else {
//     throw new Error("Пользователь не является экземпляром класса User");
//   }
// }

// const regUs = new RegularUser("Marina", "Ivanova");
// const premUs = new PremiumUser("Ivan", "Petrov");
// premUs.setPremiumAccount();

// console.log(getAccountInfo(regUs));
// console.log(getAccountInfo(premUs));
