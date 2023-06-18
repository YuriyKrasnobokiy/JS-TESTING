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

// ======================Практика 18.06.23=================================

// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

// const age = 12;
// const rights = false;
// let IsRights = false;

// if (age >= 18 && rights) {
//   IsRights = true;
// }

// console.log(IsRights);

// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

// const hasKeys = false;
// const isFriend = false;
// const isDoorOpen = true;
// let CanOpenDoor = false;

// if (hasKeys || isFriend || !isDoorOpen) {
//   CanOpenDoor = true;
// }

// console.log(CanOpenDoor);

// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt("Введіть число");
// console.log(answer);

// const numbValue = Number(answer);
// console.log(numbValue);

// if (isNaN(numbValue)) {
//   alert("Невалідне значення");
// } else {
//   const sqNumb = Math.pow(numbValue, 2);
//   console.log(sqNumb);
//   alert(`результат обчислень: ${sqNumb}`);
// }

// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt("Введіть рядок без символу $");

// if (typeof answer === "string" && !answer.includes("$")) {
//   alert(`Довжина рядка: ${answer.length}`);
// } else {
//   alert("Невірний ввід");
// }

// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const answer = Number(prompt("Number ?"));

// const message =
//   answer % 2 === 0 ? alert("Це парне число") : alert("Це не парне число");

// За допомогою циклу for потрібно виконати
// підрахунок кількості символів в рядку

// const str = "Hello, world world world";
// let count = 0;

// for (let i = 0; i < str.length; i += 1) {
//   count += 1;
// }

// console.log(count);

//3. Напишіть цикл (for), який виведе в консоль усі
// парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   if (i % 2 === 0) {
//     console.log(`${i} це парне число`);
//   } else {
//     console.log(`${i} це не парне число`);
//   }
// }

//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 90;
// const min = 0;

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   } else {
//     total += i;
//   }
// }

// console.log(total);

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль

// const ADMIN_PASSWORD = "qwerty";
// let userPassword;

// do {
//   userPassword = prompt("Enter password");
// } while (userPassword !== ADMIN_PASSWORD);

// console.log("Correct password");
// alert("Correct password");

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// const correctNumber = 10;
// let userNumber;

// do {
//   userNumber = prompt("Enter number");
// } while (userNumber <= correctNumber);

// alert("Number is bigger then 10");

// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

// const minute = 125;
// const minuteStr = String(minute % 60).padStart(2, 0);
// const str = String(Math.floor(minute / 60)).padStart(2, 0);
// const result = `${str}:${minuteStr}`;

// console.log(result);

// =====================================================2.1 Масиви=================================================================
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
