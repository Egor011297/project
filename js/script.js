"use strict"; //Строгий режим//

// let number = 5; //Наша переменная изменяема//
// const leftBorderWidth = 1; //Значение поменять не можем//

// number = 10;
// console.log(number);

// //Прямых констант в js не бывает!!!//
// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// //выведит undefined//
// console.log(name);
// var name = 'Ivan';


// {
//     var result = 50;
// }
// console.log(result);





                    //ПРОСТЫЕ ТИПЫ ДАННЫХ//

// //Получим инфинити - числовой тип данных, который обозначает бесконечность и относится к примитивным числам
// let number = 4.6;
// console.log(4/0);
// //NaN
// console.log('string' * 9);


// //Строка//
// const persone = 'Alex';

// //булевое значение
// const bool = true;

// //nul Ошибка ссылочного типа. не можем сослаться на не сущ. объект
// console.log(something);


// //undefined - когда что то существует, но у него нет никакого значения
// let und;
// console.log(und);


//                             //ОБЪЕКТЫ//

// const obj = {
//     name: 'Egor',
//     age: 25,
//     isMarried: false
// };
// console.log(obj['name']); //лучше обращаться через точку а не ['']!


// //Массив - частный случай объекта. Схожесь с объектом в том, что пара ключ-значение в массиве - это ключ:порядковый номер элемента, и значение-сам элемент массива.// 
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[4]);






                    //ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ//

// //Alert используется для предупреждения пользователя о чем то важном.
// alert('Hello');   


// //confirm - отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
// const result = confirm('Сосать жопу буш?');
// console.log(result); //если отвечаем Ок - в браузере true, отмена - false


//prompt - модальное окно, с развернутым ответом на вопрос. Что бы пользователь не ввел в окне, тип данных всегда будет строка. ВСЯ ИНФА КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ БУДЕТ В ВИДЕ СТРОК!!!
//Если перед prompt поставить + , то увидим number (динамическая типизация). Без плюса, ответ на вопрос просто склеивается с 5. После того, как мы поставили + перед prompt - от ответ на вопрос сложился с 5!
// const answer = prompt('Буш жопу то лизать?', 'Да');
// console.log(answer + 5);



// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(answers); //выведит object
// console.log(typeof(null));  //выведит object





// //Интерполяция - строка в `` ковычках , для склеивания двух переменных. `Строка, ${переменная}`. Интерполяция предпочтительней конкатенации!!
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);


// const user = 'Ivan';
// alert(`Привет , ${user}`);







                                            //ОПЕРАТОРЫ В JS


// console.log('arr' + ' - object'); //Получаем строку
// console.log(4 + ' - object'); //Получаем строку
// console.log(4 + '5'); //Получаем строку
// console.log(4 + +'5'); //Получаем число. Сложение 4 и 5 Второй плюч перед 5 - унарный



//Декримент и инкремент
// let incr = 10,
//     decr = 10;
// incr++; //Постфиксная форма 
// decr--;

// console.log(incr);
// console.log(decr);



// let incr = 10,
//     decr = 10;
// ++incr; //Префиксная форма 
// --decr;

// console.log(incr);
// console.log(decr);


// let incr = 10,
//     decr = 10;

// console.log(incr++); // Постфиксная сначало возвращает старое значение, а после прибавляет 1
// console.log(decr--); //Постфиксная сначало возвращает старое значение, а после уменьшает 1


// let incr = 10,
//     decr = 10;

// console.log(++incr); // Префиксная сразу возвращает в консоль значение +1
// console.log(--decr); // Префиксная сразу возвращает в консоль значение -1


// console.log(5%2); //Остаток от деления

// console.log(2*4 == 8); //Сравнение. если же будем сравнивать число со строкой, то сравнение идет по значению а не по типу данных. Сравнение по типу данных через строгое сравнение ===



// //И
// const isChecked = true,
//       isClose = true;
// console.log(isChecked && isClose); //Можем добавить сколько угодно переменных.


// //ИЛИ
// const isChecked = true,
//       isClose = false;
// console.log(isChecked || isClose); //Можем добавить сколько угодно переменных.


// //НЕ
// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose);



//Порядок выполнения операторов
// console.log(2+2*2 === 8);

