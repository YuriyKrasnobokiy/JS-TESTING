// ==================================2.1 Масиви=================================================================
// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients);
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// ===============ІТЕРАЦІЯ МАСИВУ================================

// const clients = ["Mango", "Poly", "Mango2", "Mango3", "Mango4", "Ajax"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ===================Цикл FOR...OF====================

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// ==========================Оператори break і continue=====================

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// шукаємо числа більші за вказане значення

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ===================ПРИСВОЄННЯ ЗА ПОСИЛАННЯМ ТА ЗА ЗНАЧЕННЯМ=============

// =================ПРИМІТИВ===========

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// ==============СКЛАДНІ ТИПИ ДАНИХ=============

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// ====================================МЕТОДИ МАСИВУ========================================================================

// ==============Методи split() і join()===================

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// ============================Метод indexOf()=================================

// const clients = ["Mango", "Ajax", "Gus", "Escobar", "UFO"];

// console.log(clients.indexOf("UFO")); // 4
// console.log(clients.indexOf("Bruno")); // -1
// console.log(clients.indexOf("Mango")); //0

// ============================Метод includes()=================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// =======Перевірка багатьох умов з includes()=======

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ============================Метод push()=================================

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// ============================Метод pop()=================================

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// ============================Метод slice()=================================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// console.log(clients.slice()); // ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-3)); // ["Ajax", "Poly", "Kiwi"]

// ============================Метод slice()=================================

// ===============ВИДАЛЕННЯ===========

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// ===============ДОДАВАННЯ===========

// const colors = ["red", "green", "blue"];

// colors.splice(3, 0, "yellow", "brown");

// console.log(colors); // ["red", "green", "blue", "yellow", "brown"]

// ===============ЗАМІНА===========

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// ============================Метод concat()=================================

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ========================================розбір лекції================

// const array = [1, "Hello", null, true, [1, 2, 3]];

// for (let i = 0; i < array.length; i += 1) {
//   if (Array.isArray(array[i])) {
//     for (let j = 0; j < array[i].length; j += 1) {
//       console.log(array[i][j]);
//     }
//     continue;
//   }
//   console.log(array[i]);
// }

// // ===========через for of===================

// const array = [1, "Hello", null, true, [1, 2, 3]];

// for (let item of array) {
//   if (typeof item === "string") {
//     item = false;
//   }
// }
// console.log("for of", array);

// // ===========через for===================

// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === "string") {
//     array[i] = false;
//   }
// }
// console.log("for", array);

// ===========while===================

// const array = [1, "Hello", null, true, [1, 2, 3]];
// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i += 1;
// }

// // ==============розвернення строки по словам=======================

// const str = "Hello world I`m learning JS";
// const result = str.split(" ").reverse().join(" ");
// console.log(str);
// console.log(result);

// ==============розвернення строки по буквам=======================

// const str = "Hello world I`m learning JS";
// const result = str.split("").reverse().join("");
// console.log(str);
// console.log(result);

// =============================ПРАКТИКА=====================

// ===================Example 1==================
// Створіть масив genres з елементами 'Jazz' та'Blues'.
// Додайте 'Rock-n-Roll' до кінця.
// виведіть у консоль перший елем масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте 'Country' та 'Reggie' на поч масиву.

// const genres = ["Jazz", "Blues"];

// // через shift unshift

// genres.push("Rock-n-Roll");

// console.log(genres.shift());
// genres.unshift("Country", "Reggie");
// console.log(genres);

// через splice

// genres.splice(genres.length, 0, "Rock-n-Roll");
// console.log(genres.splice(0, 1, "Country", "Reggie"));

// console.log(genres);

// ===================Example 2==================

// Напиши скрипт обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "8 11";

// const arr = values.split(" ");
// const first = Number(arr[0]);
// const last = Number(arr[arr.length - 1]);
// const result = first * last;
// console.log(result);

// ===================Example 3==================

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елем масиву виведи в консоль рядок у форматі номер_елементу: значення_елементу. Нумерація елементів повинна почин з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// // перший варіант

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

// // кращий варіант

// for (let i = 0, number = 1; i < fruits.length; i += 1, number += 1) {
//   console.log(`${number} : ${fruits[i]}`);
// }

// ===================Example 4==================

// Напиши скрипт який виводить у консоль телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. К-ть імен та телефонів гарантовано однакова.

// let names = "Jacob,William,Solomon,Artemius";
// let phones = "89001234567,89001112233,890055566377,890055566300";

// names = names.split(",");
// phones = phones.split(",");

// for (i = 0; i < names.length, i < phones.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// }

// ===================Example 5==================

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символом пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "Welcome to the future";

// // довгий запис

// const stringArr = string.split(" ");

// stringArr.pop();
// stringArr.shift();

// const result = stringArr.join(" ");
// console.log(result);

// // коротший запис

// const result = string.split(" ").slice(1, -1).join(" ");

// console.log(result);

// // ===================Example 6==================

// // Напиши скрипт, який "розгортає" рядок (зворотній порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";

// const result = string.split("").reverse().join("");
// console.log(result);

// ===================Example 7==================
// // Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
// const langs = ["cpython", "bjavascript", "ac++", "haskel", "php", "ruby"];

// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     console.log(result);
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// // ===================Example 8==================
// // Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 32, 37];
// let min = numbers[0];

// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(min);

// ---------------------------------------------task 1------------------------------------------

// Напиши скрипт який буде перебирати масив та видаляти всі елементи масиву що не є типом даних Number.

// const arrA = [3, "Hello", null, 42, false];

// for (let i = 0; i < arrA.length; i += 1) {
//   if (typeof arrA[i] !== "number") {
//     arrA.splice(i, 1);
//     i -= 1; // якщо є два елементи підряд що не задовольняють нашу умову, бо реіндексація відбувається
//   }
// }
// console.log(arrA);

// другий - кращий варіант цего
// перебирання з кінця

// const arrA = [3, "Hello", null, 42, false];
// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//   if (typeof arrA[i] !== "number") {
//     arrA.splice(i, 1);
//   }
// }
// console.log(arrA);

// ще такий же приклад
// const arrB = ["world", true, 22, 41, undefined];

// for (let i = arrB.length - 1; i >= 0; i--) {
//   if (typeof arrB[i] === "number") {
//     continue;
//   }
//   arrB.splice(i, 1);
// }
// console.log(arrB);

// Портрібно створити ф-цію яка буде прймати 1 параметр. Ф-ція повинна відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх у вигляді нового масиву як результат виконання ф-ції.

// function getCommonElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(arr[i], i + 1)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

// -----------------------------ТАСКА З АВТОПЕРЕВІРКИ 25/32---------------------------------------

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// // рішення

// function getCommonElements(array1, array2) {
//   let result = [];

//   for (let i = 0; i < array2.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   console.log(result);
//   return result; // [12, 27, 3]
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// // ------------------------------------------task 3-------------------
// // Створи ф-цію яка буде приймати 2 параметри: 1 парам - це масив всіх юзерів; 2 парам - це масив тільки чоловічих імен. Ф-ція повинна відібрати з масиву всіх юзерів лише з жін. іменами та повернути їх в результаті свого виконання.
// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Max",
//   "Sveta",
//   "David",
//   "Roman",
//   "Olga",
//   "Zoya",
//   "Kate",
// ];
// const men = ["Artem", "Max", "David", "Roman"];
// function getWomen(users, men) {
//   const women = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }
//   return women;
// }

// console.log(getWomen(users, men));

// // -----------------------------------------task 4-------------------

// // Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання. Якщо ж ні, то заміни елемент на вірний.

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   if (currentEl - prevEl !== 1) {
//     numbers[i] = prevEl + 1;
//   }
// }
// console.log(numbers);

// // -----------------------------------------task 5-------------------
// Напиши ф-цію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.Ф-ція має повернути текст в форматі як на прикладах.
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let message;
//   switch (arr.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }
//   return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(
//   createStr([
//     "Jacob",
//     "Alex",
//     "Jacob",
//     "Mark",
//     "Max",
//     "Mark",
//     "Max",
//     "Mark",
//     "Max",
//   ]),
// );

// =================Модуль 2.4 ФУНКЦІЇ====================================

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     result = console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     result = console.log("Недостатньо коштів на рахунку");
//   } else {
//     result = console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// ---------------------------------------

// function withdraw(amount, balance) {
//   // Якщо умова виконується, викликається console.log
//   // і вихід із функції. Код після тіла if не виконається.
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }

//   // Якщо умова першого if не виконалась, його тіло пропускається
//   // та інтерпретатор доходе до другого if.
//   // Якщо умова виконується, викликається console.log і вихід із функції.
//   // Код, що знаходиться після тіла if, не виконається.
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }

//   // Якщо жоден із попередніх if не виконався,
//   // інтерпретатор доходить до цього коду і виконує його.
//   console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"

// --------Функціональний вираз-------------------------
// // виклик до оголошення
// multiply(3, 4, 5);

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// // виклик після оголошення
// multiply(8, 9, 11);

// ---------------нотатки з записаної лекції--------------------

// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// const arr3 = [8, 9];

// function sum(item) {
//   for (let i = 0; i < item.length; i += 1) {
//     item[i] = item[i] * 2;
//   }
//   console.log(item);
// }

// sum(arr);
// sum(arr2);
// sum(arr3);

// declaration
// function name(param) {}

// expression
// це ф-ція що оголошена в змінній

// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];
// const arr3 = [8, 9];

// const sum = function (item) {
//   for (let i = 0; i < item.length; i += 1) {
//     item[i] = item[i] * 2;
//   }
//   console.log(item);
// };

// sum(arr);
// sum(arr2);
// sum(arr3);

// --------------дефолтне значення аргументу------------------

// function add(val, val1 = 0) {
//   return val + val1;
// }

// console.log(add(3, 4));
// console.log(add(5, 7));
// console.log(add(11));

// ==================стек викликів ф-ції============================

// function createString(name, year) {
//   // const result = add(year);
//   return `${name} years ${add(year)} old`;
// }
// console.log(createString(`Mango`, [1, 7, 3]));

// ----------------------------------переперегляд лекції модулю 2.2----------------------------------------------------

// -------------------------------Область видимості------------------------

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // ex 1

// let value = 4;

// if (true) {
//   value = 11;
// }

// console.log(value); // 11

// // ex 2

// let value = 4;

// if (true) {
//   let value = 11;
// }

// console.log(value); // 4

// // ex 3

// let value = 4;

// if (true) {
//   if (true) {
//     value = 24;
//   }
//   let value = 11;
// }

// console.log(value); // помилка доступу до змінної, бо звертаємось до змінної перед її ініціалізацією.

// // ex 4

// let value = 2;

// function checkScope(value) { // let value = 2 це локальна змінна яку ми перевизначаємо
//   value = 45;
//   return value;
// }

// checkScope(value);

// console.log(value); // 2

// // ex 5

// let value = 2;

// function checkScope() {
//   value = 45;
//   return value;
// }

// checkScope(value);

// console.log(value); // 45

// // ex 6

// let someArray = ["Hello", "my", "name", "is", "scope"];

// function checkScope(arr) { // let arr = someArray;
//   arr.splice(0, 3);
// }

// checkScope(someArray);

// console.log(someArray); // ["is", "scope"]

// // ex 7

// let someArray = ["Hello", "my", "name", "is", "scope"];

// function checkScope(arr) {
//   // let arr = someArray;
//   arr = Array.from(arr);
//   arr.splice(0, 3);
// }

// checkScope(someArray);

// console.log(someArray); // ["Hello", "my", "name", "is", "scope"];
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ------------------Call Stack--------------------------------------

// function logItem(valA, valB) {
//   const result = getSum(valA, valB);
//   const message = `Result is ${result}`;
//   console.log(message);
// }

// function getSum(a, b) {
//   return a + b;
// }

// logItem(5, 7);

// ----------------Приклад переповнення call stack та виникнення помилки що call stack переповнено: Uncaught RangeError: Maximum call stack size exceeded--------------------

// function logItem(valA, valB) {
//   const result = getSum(valA, valB);
//   const message = `Result is ${result}`;
//   console.log(message);
// }

// function getSum(a, b) {
//   logItem(); // відбуваються виклики ф-цій по колу.
//   return a + b;
// }

// logItem(5, 7);

//-------------- Практика ---------------- //

// --------------------------Task-1;-------------------------------------------------------------------------------
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];
// // Застосування функції

// function checkValue(arr, target) {
//   let message = "Success ✅";
//   for (const numb of arr) {
//     if (target > numb) {
//       message = "Fail ❌";
//     }
//   }
//   return message;
// }
// checkValue(numbers, 10);

// console.log(checkValue(numbers, 10));

// //---------------Застосування ф-ції + патерн "раннє повернення"------------------------

// const numbers = [25, 12, 67, 40, 18];
// // Застосування функції

// function checkValue(arr, target) {
//   for (const num of arr) {
//     if (target > num) {
//       return "Fail ❌";
//     }
//   }
//   return "Success ✅";
// }

// console.log(checkValue(numbers, 10));

// console.log(checkValue(numbers, 13));

// // ---------------------Task-2--------------------------------------------------------------------
// // Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// // 1 - масив значень
// // 2 - потрібну кількість елементіа в масиві
// //  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8]; // [[1, 2], [3, 4], [5, 6], [7, 8]]

// function getCombination(arr, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const comb = arr.slice(i, i + count);
//     result.push(comb);
//   }
//   return result;
// }
// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));
// console.log(getCombination(data, 5));

// -----------------------Example 3 - Площа прямокутника---------------------------------------------------
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   const firstValue = Number(arr[0]);
//   const secondValue = Number(arr[1]);

//   return firstValue * secondValue;
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// -------------------------Task-4--------------------------------------------------
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// -----------------додає курс до кінця колекції--------------------------

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return "Ви вже маєте такий курс";
//   }
//   courses.push(name);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// ---------------видаляє курс із колекції-----------------------------

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   if (!~idx) {
//     return "Курс із таким ім'ям не знайдено";
//   }
//   courses.splice(idx, 1);
// }

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// ------------------ змінює ім'я на нове--------------------------

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (~idx) {
//     courses[idx] = newName;
//     return;
//   }
//   return "Курс із таким ім'ям не знайдено";
// }

// updateCourse("HTML", "NestJS");
// console.log(updateCourse("qwerty", "NestJS"));
// console.log(courses); // ['NestJS', 'CSS', 'JavaScript', 'React', 'PostgreSQL']
