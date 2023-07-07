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

// Task-4
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.  У випадку помилки, викликається errorCallback і передається повідомлення про помилку.
const products = [
  {
    id: 1,
    name: "Телефон",
    price: 10000,
    description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
  },
  {
    id: 2,
    name: "Ноутбук",
    price: 25000,
    description: "Легкий та потужний ноутбук для роботи та розваг.",
  },
  {
    id: 3,
    name: "Планшет",
    price: 8000,
    description: "Компактний планшет для перегляду контенту.",
  },
];

function getProductDetails(id, succes, error) {
  for (const product of products) {
    if (product.id === id) {
      succes(product);
      return;
    }
  }
  error();
}

getProductDetails(3, handleSuccess, handleError);

// getProductDetails(11, handleSuccess, handleError);

function handleSuccess(message) {
  console.log(`✅ Success!`, message);
}

function handleError(productId) {
  console.log(`❌ Error! Product not found`);
}
