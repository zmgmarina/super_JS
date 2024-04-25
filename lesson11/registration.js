//Система регистрации пользователей для веб-приложения 
//Глобадбный объект 
const App = {

};

//Класс пользователь с защищенным свойством #_name
class User {
    #_name;
    constructor(name) {
        this.#_name = name;
    }

    getName() { return this.#_name; }
}

//ДОбавлене  функции регистрации пользователя 
App.registerUser = (name, email, password) => {
    try {
        //Проверка введенных данных
        if (!name || !email || !password) {
            throw new Error('Не все данные были введены');
        }
        const user = new User(name); // создание экз. класса User 

        //Дополнительная обработка и сохранение пользователя
        const userDate = {
            name: user.getName(),
            email,
            password
        };
        //Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер 
        console.log(('Пользователь успешно зарегестрирован', user.getName()));
        console.log('Дополнительные  данные о пользователе', userDate);
    }catch (error) {
        console.error('Oшибка регистрации:', error.message);
    } finally {
        console.log('Завершение регистрации');
    }
}


App.registerUser('Marina', 'kjbkjbk@mm.com', '343546');
App.registerUser('Marina', '', '343546');
