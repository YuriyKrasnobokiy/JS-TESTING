// let username;
// console.log(username); // undefined
// let age = 12;
// age = 25;
// console.log(age);
// const username = "Mango";
// const description = "JavaSript для початківців";
// console.log(username);
// console.log(description);
// const username = "Mango";
// console.log("Username is", username);
// const message = "JavaScript is awesome!";
// alert(message);
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"
// const x = 10;
// const y = 12;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;
// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15
// const x = 5;
// const y = 10;
// const z = 5;
// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false
// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof valueA); // "string"
// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN
// console.log(Number.parseFloat("1.5px"));
// console.log(Number.parseFloat("12qwe74"));
// console.log(Number.parseFloat("12.46qwe79"));
// console.log(Number.parseFloat("qweqwe"));
// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false
// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true
// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41
// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1
// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2
// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2
// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50
// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10
// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16
// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10
// console.log(Math.round(Math.random() * (10 - 1) + 1)); // повертає ціле випадкове число
// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy
// const guestName = "Mango";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room nomber is " + roomNumber + "!";
// console.log(greeting);
// const greeting1 = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting1);

// ==================length====================

// const message = "Welcome to Hell";
// console.log(message.length);
// console.log("There is nothing impossible to him who will try".length);

// ==================toLowerCase, toUpperCase====================
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsuNg";
// const normalizedToUpperCaseInput = userInput.toUpperCase();
// console.log(userInput); // 'saMsuNg'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// ==================indexOf====================

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("o")); // 4
// console.log(message.indexOf("a")); // 12
// console.log(message.indexOf("B")); // 11
// console.log(message.indexOf("x")); // -1

// ==================includes====================

// const productName = "Ремонтний дроїд";
// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("PTVнтний")); // false

// ==================replace====================

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// ==================replaceAll====================

// const cssFileNames =
//   "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// ==================slice====================

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
// console.log(productName.slice(4, 5)); // "i"
// console.log(productName.slice(-6, productName.length)); // " droid"

// ==================Math.ceil, Math.floor, Math.round====================

// const apples = 30;
// const grapes = 100;
// const result = -apples + grapes;
// console.log(result);
// const value = 27.5;
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));

// const companyName = "Cyberdine System";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// індекс маси тіла необхідно округлити до однієї цифри після коми.
// let weight = "88,3";
// let height = "1.75";
// weight = Number(weight.replace(",", "."));
// height = Number(height);
// // height = +height; // через бінарнитй плюс.
// // const bmi = weight / Math.pow(height, 2);
// // const bmi = weight / height ** 2; // так теж працює.
// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1)); // коротший запис.
// console.log(typeof bmi);
// console.log(bmi);

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 5);
// console.log(10 <= 5);
// console.log("10" <= 5);
// console.log(10 <= "5");
// console.log("10" <= "5");
// console.log("10" < "5");
// console.log("5" == 5);
// console.log("6" === 6);

// false => 0;
// true => 1;

// console.log(6 == true);
// console.log(1 == true);
// console.log(0 == false);
// console.log(1 === true);
// console.log(0 === false);

// console.log("Papaya" < "papaya"); // true 'P' < 'p' 50 < 70

// && повертає перше false або останнє true

// console.log(true && 4); // 4
// console.log(false && 4); // false
// console.log(true && 4 && "kiwi"); // kiwi
// console.log(true && 0 && "kiwi"); // 0

// // || повертає перше true або останнє false

// console.log(3 || true || 4); // 3
// console.log(true || false || 7); // true
// console.log(0 || false || undefined); // undefined

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost);

// let cost;
// const subscription = "free";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost);

// ===========Тернарний оператор---------------

// let type;
// const age = 38;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
// console.log(type);

// // теж саме але через тернарний оператор

// const age = 2;

// const type = age >= 18 ? "adult" : "child";

// console.log(type);

// // пошук більшого числа
// const num1 = 50;
// const num2 = 100;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }
// console.log(`Bigger number is ${biggerNumber}`);

// пишемо через тернарний оператор

// const num1 = 50;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(`Bigger number is ${biggerNumber}`);

// ====================instruction SWITCH-----------------------------

// let cost;
// const subscriotion = "pro";

// switch (subscriotion) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

// ================================Область видимості=========================================
// const value = 5;

// if (true) {
//   const value = 5;
//   console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // ReferenceError: value is not defined

// ===============================WHILE----------------------------

// створимо лічильник

// let counter = 0;

// while (counter < 3) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// заповнюємо місця в готелі до максимум місць

// let clientsCounter = 18;
// const maxClients = 31;

// while (clientsCounter < maxClients) {
//   console.log(clientsCounter);
//   clientsCounter += 1;
// }
// console.log("нажаль вільні номери скінчились");

// =================DO...WHILE-----------
// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// ============================FOR===================================

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// // сума чисел до певного значення

// const target = 10;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
//   console.log(i);
// }

// console.log(sum);
// остача від діленя за допомогою циклу for

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// ----------------BREAK---------------

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

//-------------------CONTINUE------------

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// =====================ПРАКТИКА================================

// ====================Задачка про світлофор ===============================================

// Спитати який колір бачить юзер на світлофорі і вказати що йому робити

// // через if else if

// let userColor = prompt("COLOR?");
// let action; // це лише нам і необов'язково

// const red = "red";
// const yellow = "yellow";
// const green = "green";

// if (userColor) {
//   userColor = userColor.toLowerCase();
//   console.log(userColor); // це лише нам і необов'язково
// }

// if (userColor === red) {
//   alert("STOP!"); // це юзеру
//   action = "STOP!"; // це лише нам і необов'язково
// } else if (userColor === yellow) {
//   alert("READY!"); // це юзеру
//   action = "READY!"; // це лише нам і необов'язково
// } else if (userColor === green) {
//   alert("GO!"); // це юзеру
//   action = "GO!"; // це лише нам і необов'язково
// } else {
//   alert("BE CAREFUL!"); // це юзеру
//   action = "BE CAREFUL!"; // це лише нам і необов'язково
// }

// console.log(action); // це лише нам і необов'язково

// ==================Задачка про світлофор через switch===============================================

// let userColor = prompt("COLOR?");
// let action; // це лише нам і необов'язково

// const red = "red";
// const yellow = "yellow";
// const green = "green";

// if (userColor) {
//   userColor = userColor.toLowerCase();
//   console.log(userColor); // це лише нам і необов'язково
// }

// switch (userColor) {
//   case "red":
//     action = "STOP"; // це лише нам і необов'язково
//     alert("STOP!");
//     break;

//   case "yellow":
//     action = "READY"; // це лише нам і необов'язково
//     alert("READY!");
//     break;

//   case "green":
//     action = "GO"; // це лише нам і необов'язково
//     alert("GO!");
//     break;

//   default:
//     action = "BE CAREFUL!"; // це лише нам і необов'язково
//     alert("BE CAREFUL!");
// }

// console.log(action); // це лише нам і необов'язково

// -------------------------ЗАДАЧКА ПРО РАВЛИКА (З ФУНКЦІЄЮ )----------------------------------------

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;

//     if (total < deps) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(days);
// }

// getDays(18);

// ----------------------------Підрахуй скільки голосних літер у реченні-----------------

// function countVowel(str) {
//   const vowels = "aeiou";
//   let counter = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// console.log(countVowel("HELLO WORLD"));
