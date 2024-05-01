//Генератор для генерации последовательности чисел----------------------

function* numberGenerator() {
    let number = 1;
  
    while (true) { //бесконечно
      yield number;
      number++;
    }
  }
  
  //Создаем экземпляр генератора
  const generator = numberGenerator();
  
  console.log(generator.next().value); //1
  console.log(generator.next().value); //2
  console.log(generator.next().value); //3
  console.log(generator.next().value); //4
