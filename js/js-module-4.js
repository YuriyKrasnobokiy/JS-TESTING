// ======================================МОДУЛЬ 4.1============================================================
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ===========================================================================

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// ===========================================================

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// =======================================================

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(9, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(7, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ========================================================================

// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ====================================================================

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c, d, e) => {
//   return a + b + c + d + e;
// };
// console.log(arrowAdd(1, 2, 3, 4, 5));

// =============================================================================

// const foo = (a, b, c) => a - b + c;
// console.log(foo(1, 4, 2));

// ================================================================

// const foo = (...args) => {
//   console.log(args);
// };

// foo(1, 2, 3, 4, 5, 4, 5, 4, 6, 7, 8, 9, 4, 5, 4, 4, 5, 3);

// ====================================================================================

// const numbers = [5, 10, 15, 20, 25];

// // // Оголошення функції
// // numbers.forEach(function (number, index) {
// //   console.log(`Індекс ${index}, значення ${number}`);
// // });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [5, 12, 15, 20, 125];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// ===================================================Нотатки з записаної лекції=====================================================================
// //=========================callback=================

// const arr = [2, 6, 1, 7, 3];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));

// console.log(each(arr, sum));

// console.log(each(arr, division));

// function add(first, second) {
//   return first + second;
// }

// function sum(first, second) {
//   return first * second;
// }

// function division(first, second) {
//   return first / second;
// }

// =================forEach=============================

// // множимо кожен елемент масиву на 2

// const arr = [2, 6, 1, 7, 3];

// // item - ітеруємий елемент (обов'язковий)
// // i - index поточного елемента (необов'язковий)
// // arr - масив який ітеруємо (необов'язковий)

// arr.forEach(function (item, i) {
//   arr[i] = item * 2;
// });

// console.log(arr);

// -----------------------------------

// // пропуск елемента якщо треба тільки індекс в параметрі

// const arr = [2, 6, 1, 7, 3];

// arr.forEach(function (_, idx) {
//   console.log(idx);
// });

// =========================Практика==================================================

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
//   console.log(product);
// }

// function logProduct(obj) {
//   console.log(`Product ${obj.name}`);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }

// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logProduct,
// );

// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice,
// );

// -----------------------------------------------------------------

// // Example 2 - Коллбек функції
// // Додайте в об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// // Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// // Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (this.balance < amount) {
//       onError(`Not enough in the account`);
//       return;
//     }

//     this.balance -= amount;
//     onSuccess(`Transaction complete ${amount}, balance ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount <= 0) {
//       onError(`Nice try Bro 😂`);
//       return;
//     }

//     this.balance += amount;
//     onSuccess(`Added ${amount}, balance ${this.balance}.`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ========================================================================

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// // Рішення
// function each(array, callback) {
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// ===========================================

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const createProduct = (partialProduct, callback) => callback({
//     id: Date.now(),
//     ...partialProduct
// });

// const logProduct = product => console.log(product.name);
// const logTotalPrice = ({
//     price,
//     quantity
// }) => console.log(price * quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);

// =================================================================

// Example 5 - Стрілочні функції
// Виконайте рефакторинг колбеків за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount > this.balance) {
//             onError(`Amount can't exceed account balance of ${this.balance} credits`);
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount <= 0) {
//             onError(`Amount must be more than 0 credits`);
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// =================================================================

// // Example 6 - Інлайн стрілочні функції
// // Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// =========================================

// // Example 7 - Метод forEach
// // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// //  було

// // function logItems(items) {
// //   console.log(items);
// //   for (let i = 0; i < items.length; i += 1) {
// //     console.log(`${i + 1} - ${items[i]}`);
// //   }
// // }

// const logItems = (arr) =>
//   arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =========================================

// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// було

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// стало

// const calculateAverage = (...arr) => {
//   let total = 0;
//   arr.forEach((value) => (total += value));

//   return total / arr.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// =====================Практика з онлайн лекції===========================================================

// // Task - 1
// // Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (arr) =>
//   arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// -----------------------------------------------

// // Task - 2
// // Напишіть наступні функції:
// // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(`Product`, product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Product total price, ${price * quantity}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);

// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// ---------------------------------------------

// //  Task - 3
// // Напишіть функцію яка буде отримувати 2 параметри.
// // 1 - масив чисел.
// // 2 - функцію яка має опрацювати кожен елемент масиву.
// // Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// // function each(arr, action) {}

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value * 2;
// //   }),
// // );

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value - 10;
// //   }),
// // );

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return Math.ceil(value);
// //   }),
// // );

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return Math.floor(value);
// //   }),
// // );

// // переписуємо на arrow function

// function each(arr, action) {
//   const items = [];
//   // arr.forEach((elem) => {
//   //   const result = action(elem);
//   //   items.push(result);
//   // });

//   // коротший запис
//   arr.forEach((elem) => items.push(action(elem)));

//   return items;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.floor(value)));

// ----------------------------------------------------------------------

// // Task-4
// // Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.  У випадку помилки, викликається errorCallback і передається повідомлення про помилку.
// const products = [
//   {
//     id: 1,
//     name: "Телефон",
//     price: 10000,
//     description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//   },
//   {
//     id: 2,
//     name: "Ноутбук",
//     price: 25000,
//     description: "Легкий та потужний ноутбук для роботи та розваг.",
//   },
//   {
//     id: 3,
//     name: "Планшет",
//     price: 8000,
//     description: "Компактний планшет для перегляду контенту.",
//   },
// ];

// function getProductDetails(id, succes, error) {
//   for (const product of products) {
//     if (product.id === id) {
//       succes(product);
//       return;
//     }
//   }
//   error();
// }

// getProductDetails(3, handleSuccess, handleError);

// // getProductDetails(11, handleSuccess, handleError);

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product not found`);
// }

// =====================================Перебираючі методи масивів======================================================================================

// // ================Чисті функції=======================

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// // ================Метод Map()=======================

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// // ================Масив об'єктів і метод map()=======================
// // ================Масив об'єктів і метод map()=======================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// // ================Метод flatMap()=======================

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map((student) => student.courses);
// console.log(students.map((student) => student.courses));
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap((student) => student.courses);
// console.log(students.flatMap((student) => student.courses));
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// // ================Метод filter()=======================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues);

// const bigValues = values.filter((value) => value > 100);
// console.log(bigValues);

// console.log(values);

// // ================Фільтрація унікальних елементів=======================

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index,
// );
// console.log(uniqueCourses);

// // ================Масив об'єктів=======================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
// );
// console.log(average);

// // ================Метод find()=======================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "green"); // { label: "green", color: "#4CAF50" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// // ================Метод findIndex()=======================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
// colorPickerOptions.findIndex((option) => option.label === "red"); // 0
// colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
// colorPickerOptions.findIndex((option) => option.label === "white"); // -1

// console.log(colorPickerOptions.findIndex((option) => option.label === "blue")); // 2
// console.log(colorPickerOptions.findIndex((option) => option.label === "red")); // 0
// console.log(colorPickerOptions.findIndex((option) => option.label === "pink")); // 3
// console.log(colorPickerOptions.findIndex((option) => option.label === "white")); // -1

// // ================Методи every() і some()=======================

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true
// console.log([1, 2, 3, 4, 5].every((value) => value >= 0));

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));

// // -----------------------

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some((value) => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some((value) => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

// // ------------------Масив об'єктів-------------

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false
// console.log(allAvailable);

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true
// console.log(anyAvailable);

// // ================Метод reduce()=======================

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// // ---------------Масив об'єктів------------------

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   // { name: "Ківі", score: 94 },
//   // { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(totalScore);
// console.log(averageScore);

// // -------------Просунутий reduce()---------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// // ---------зберемо усі теги в масив----------------

// // const tweets = [
// //   { id: "000", likes: 5, tags: ["js", "nodejs"] },
// //   { id: "001", likes: 2, tags: ["html", "css"] },
// //   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// //   { id: "003", likes: 8, tags: ["css", "react"] },
// //   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// // ];

// // // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// // const tags = tweets.reduce((allTags, tweet) => {
// //   allTags.push(...tweet.tags);

// //   return allTags;
// // }, []);

// // console.log(tags);

// // // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // // для збирання тегів з колекції
// // const getTags = (tweets) =>
// //   tweets.reduce((allTags, tweet) => {
// //     allTags.push(...tweet.tags);

// //     return allTags;
// //   }, []);

// // console.log(getTags(tweets));

// // -------------Рахуємо к-ть унікальних тегів--------------------------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// =================метод Sort()=============================================

// //-----------сортування об'єктів-----------

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );

// // const inDescendingScoreOrder = students.sort(
// //   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// // );

// // const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
// //   firstStudent.name.localeCompare(secondStudent.name),
// // );

// console.log(inAscendingScoreOrder);
// // console.log(inDescendingScoreOrder);
// // console.log(inAlphabeticalOrder);

// // ================Ланцюжки методів=======================

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// ====================================Нотатки з записаної лекції==============================================

// Практика

// // Task-1
// // Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, item) => acc + item, 0);
//     const obj = {
//       name,
//       average: Math.round(total / grades.length),
//     };
//     return obj;
//   });
// }
// console.log(getAverage(students));

// -----------------------------------------------------------

// // Task-2
// // Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   // const result = arr.filter((student) => student.age > 20);
//   // return result;

//   // -----або по-дорослому-----
//   return arr.filter(({ age }) => age > 20);
// }

// console.log(getAdult(students));

// --------------------------------------------------------------------

// // Task-3
// // Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title)
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   // const book = arr.find((book) => book.title === title);

//   // return book || "Not found";

//   // // --------Або по-дорослому----------

//   return arr.find(({ title: bookTitle }) => bookTitle === title) || "Not found";
// }

// console.log(
//   getBook(books, "The Pragmatic Programmer: Your Journey to Mastery"),
// );
// console.log(getBook(books, "Qwerty"));

// ---------------------------------------------------------

// // Task-4
// // Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами. Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   // const total = arr.reduce((acc, product) => {
//   //   acc += product.price * product.quantity;
//   //   return acc;
//   // }, 0);
//   // return total;

//   // --------або по-дорослому---------
//   return arr.reduce((acc, { price, quantity }) => (acc += price * quantity), 0);
// }

// console.log(getTotal(products));

// -----------------------------------------------------------

// // Task-5
// // Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку. Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function sortDesc(arr) {
//   // const result = [...arr].sort((a, b) => b.year - a.year);
//   // return result;

//   // ------Або по-дорослому--------------

//   return [...arr].sort((a, b) => b.year - a.year);

//   //   // ----------якщо треба і автора і рік видання---------------------

//   //   return [...arr]
//   //     .sort((a, b) => b.year - a.year)
//   //     .map(({ author, year }) => ({ author, year }));
// }

// console.log(sortDesc(books));

// -----------------------------------------------------------

// // Task-6
// // Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   // const min = arr.filter((product) => product.price < 2);
//   // const names = min.map((product) => product.name);
//   // names.sort((a, b) => a.localeCompare(b));

//   // return names;

//   // -----------за доп чейнінга------------------

//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));

// -----------------------------------------------------------

// // Task-7 HARD 😈

// // Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
// const str = "absdabsrgbadgtdswwbetflg";
// // Результат на який очікуємо
// // const obj = {
// //     a: 3,
// //     b: 4,
// //     s: 3,
// //     // ...
// // }

// const obj = str.split("").reduce((acc, item) => {
//   if (acc.hasOwnProperty(item)) {
//     // item in acc
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log(obj);
