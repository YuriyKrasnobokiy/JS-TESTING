//===================================== Модуль 3.1 Об'єкти ================================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 10;
// book.genres.push("sasasdasd");
// book.pages = 1245;
// book.originalLang = "ua";

// console.log(book);

// console.log(book.rating);

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const name = "Arthur";
// const age = 27;
// const user = {
//   name,
//   age,
// };

// user.country = "Ukraine";
// user.job = "Js developer";

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.country);

// const propName = "name";
// const propStatus = "status";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
//   [propStatus]: "IT",
// };

// console.log(user.name); // 'Генрі Сибола'
// console.log(user.status); // 'IT'

// const bookShelf = {
//   books: ["The Last Kingdom", "The Last Kingdom2", "The Last Kingdom3"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// ===============Масив об'єктів=======================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// let averageRating = totalRating / books.length;
// averageRating = averageRating.toFixed(1);
// console.log(averageRating); // 8.2

// ==================================Нотатки з записаної лекції===============================

// const user = {
//   name: "Yurii",
//   age: 31,
//   lang: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   hobby: {
//     music: true,
//     VRGames: true,
//   },
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// const user = {
//   name: "Yurii",
//   age: 31,
//   lang: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   hobby: {
//     music: true,
//     VRGames: true,
//   },
// };

// // user.age = 32;
// user.age += 1;

// user.city = "Kyiv";

// // console.log(user.age);
// console.log(user);

// -----------------Видалення------------------------------

// const user = {
//   name: "Yurii",
//   age: 31,
//   lang: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   hobby: {
//     music: true,
//     VRGames: true,
//   },
// };

// delete user.city;
// console.log(user);

// --------------Заборона змінення об'єкту-------------------------

// const user = {
//   name: "Yurii",
//   age: 31,
//   lang: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   hobby: {
//     music: true,
//     VRGames: true,
//   },
// };

// Object.freeze(user);

// user.age = 100; // неспрацює
// console.log(user);

// ======================Практика з записаної лекції=====================================

// //-----------------task 1--------------------------------------
// Напиши скрипт який для об'єкта user послідовно :
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user["premium"] = false;
// // або
// const key = "premium";
// user[key] = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(user[key]);
// }
// console.log(keys);

// ------------------------------------додавання об'єкту в об'єкт----------

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.skills = {
//   run: true,
//   swim: false,
// };
// console.log(user.skills);
// console.log(user);

// //-----------------task 2 метод Object.values--------------------------------------
// У нас є об'єкт де збуріг зарплати ношої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   john: 100,
//   Ann: 160,
//   Pete: 130,
// };

// -----for...in----
// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
//   console.log(sum);
// }

// -----for...of----
// let sum = 0;

// const values = Object.values(salaries);
// console.log(values);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// -----------------task 3 - Масив Об'єктів--------------------------------------
// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ямб ціною та к-тю з об'єкта.

// const stones = [
//   {
//     name: "Смарагд",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Діамант",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Сапфір",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Щебінь",
//     price: 200,
//     quantity: 2,
//   },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//     console.log(stone.name);
//   }
//   return "Empty";
// }

// console.log(calcTotalPrice(stones, "Щебінь"));

// // -----------------task 4 - комплексні завдання--------------------------------------
// // Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// // * Типів транзакцій всього два.
// // * можна покласти гроші або зняти з рахунку.

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// Object.freeze(Transaction);

// // * кожна транзакція це об'єкт з із вл-ми: id, type та amount
// //

// const account = {
//   // поточний баланс рахунку
//   balance: 0,

//   // // історія транзакцій
//   transactions: [{ id: 16, amount: 145, type: "deposit" }],

//   //* метод створює та повертає об'єкт транзакцій.
//   //* приймає суму та тип транзакції

//   createTransaction(amount, type) {
//     return {
//       id: Date.now(),
//       amount,
//       type,
//     };
//   },

//   //*метод, що відповідає за додавання суми до балансу.
//   //*приймає суму транзакції.
//   //* викликає createTransaction для створення об'єкта транзакції
//   //* після чого додає його до історії транзакції

//   deposit(amount) {
//     if (amount <= 0) {
//       return "Error";
//     }
//     const item = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactions.push(item);
//   },

//   //* Метоод, що відповідає за зняття суми з  балансу.
//   //* Приймає суму транзакції.
//   //* Викликає createTransaction для створення об'єкта транзакції.
//   //* після чого додає його до історії транзакцій.

//   //* Якщо amount більше ніж поточний баланс, виводить повідомлення про те що зняття такої суми не можливе, недостатньо коштів.

//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return "недостатньо коштів";
//     }
//     const item = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(item);
//     this.balance -= amount;
//   },

//   //* метод повертає поточний баланс
//   getBalance() {
//     this.balance;
//   },

//   //* метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Empty";
//   },

//   //* метод повертає к-ть коштів певного типу транзакції з усієх історії транзакцій
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(1);
// account.deposit(1000);
// account.deposit(10);
// account.withdraw(123);

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account);

// ------------------------------------нотатки з онлайн лекції модуль 3.1----------------------------------

// два способи додавання нового ключа ключа

// const user = {
//   name: "Test",
// };
// console.log(user);

// user.city = "Kyiv";
// user["age"] = 31;
// console.log(user);

// ------------------------------------------------------------ПРАКТИКА---------------------------------------------------------

// Task - 1-------------------------------------------------------------------------
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//   const totalPrice = quantity * price;
//   const basket = {
//     name: product,
//     price,
//     quantity,
//     totalPrice,
//   };
//   return basket;
// }
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("apple", 13, 1200));

// // або коротший запис

// function createBasket(product, quantity, price) {
//   const totalPrice = quantity * price;
//   return {
//     product,
//     quantity,
//     price,
//     totalPrice,
//   };
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("apple", 13, 1200));

// Task - 2---------------------------------------------------------------------------------
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };
// function getTime(Obj) {
//   const values = Object.values(Obj);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `Count of players ${values.length}, average time ${
//     total / values.length
//   }`;
// }

// console.log(getTime(players));

// Task - 3-------------------------------------------------------------------------------------
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// -------1--------------

// function getUsers(arr, bookName) {
//   const userNames = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       userNames.push(user.name);
//     }
//   }
//   return userNames.join(", ");
// }

// console.log(getUsers(friends, "Harry Potter"));

// ----------2---------------
// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     console.log(user.name, user.hasOwnProperty("age"));
//     if (user.hasOwnProperty("age")) {
//       totalAge += user.age;
//     }
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));

// ---через key in Object

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     console.log(user.name, user.hasOwnProperty("age"));
//     if ("age" in user) {
//       // ключ в об'єкті
//       totalAge += user.age;
//     }
//   }
//   console.log(totalAge);
// }
// console.log(getTotalAge(friends));

// ----Task - 4----------------------------------------------------------------------------------------------
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],

//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getStudentsList(faculty) {
//     if (!(faculty in this)) {
//       return "Faculty not found";
//     }
//     const students = [];
//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }
//     return students.join(", ");
//   },
//   getTotalPoints(faculty) {
//     if (!(faculty in this)) {
//       return "Faculty not found";
//     }
//     let totalPoints = 0;
//     for (const student of this[faculty]) {
//       if ("points" in student) {
//         totalPoints += student.points;
//       }
//     }
//     return totalPoints;
//   },
// };

// console.log(hogvarts.getStudentsList("griffindor"));
// console.log(hogvarts.getStudentsList("slizerin"));
// console.log(hogvarts.getStudentsList("slizedfgdfrin"));
// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));

//===================================== Модуль 3.2 Операція spread, rest, деструктуризація ================================================================

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// --------spread: створення нового масиву---

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...currentWeekTemps, ...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [23, 17, 18, 14, 25, 11, 23, 17, 18]

// -----spread: створення нового об'єкта------

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ----------rest: збирання всіх аргументів функції-----------------------

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, "gfghfghfghfg");

// -----------------rest: збирання частини аргументів функції------------------
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 5, 6, 7);

// ----------------------------------------------------------Деструктуризація об'єктів------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const {
//   title,
//   author,
//   isPublic,
//   rating,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(secondCoverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// -------------Деструктуризація в циклах----------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   const { title, author, rating } = book;

// //   console.log(title);
// //   console.log(author);
// //   console.log(rating);
// // }

// // Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// -------------Глибока деструктуризація------
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// --------------Деструктуризація масивів-----------------

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3, purtrt = 123] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa},P:${purtrt}`); // "R:200,G:100,B:255,Alfa:0.3"

// ============================================Нотатки з записаної лекції=================================

// -----------------------------------------------Глибока вкладеність об'єктів------------------------------------

// const user = {
//   name: "Test",
//   age: 31,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars: {
//       audi: "A6",
//       bmw: "X5",
//     },
//   },
// };
// const {
//   name,
//   skills: {
//     js,
//     css: sass,
//     cars: { audi },
//   },
// } = user;

// console.log(audi);
// console.log(sass);
// console.log(js);

// ------------------------

// const user = {
//   name: "Test",
//   age: 31,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars: {
//       audi: "A6",
//       bmw: "X5",
//     },
//   },
//   languages: [{ html: true }, { css: false }],
// };

// const {
//   languages: [skillHtml, css],
// } = user;

// const { html } = skillHtml;
// console.log(html);
// console.log(css);

// ----------------------------------------
// // -----дефолтне значення----------
// function foo({ name, car: { bmw = "None" } = {} }) {
//   console.log(bmw);
// }

// foo({
//   name: "User1",
//   languages: "html",
//   car: {
//     audi: "A6",
//     bmw: "X5",
//   },
// });

// foo({
//   name: "User1",
//   languages: "css",
// });

// ===========================================spread============================================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const min = Math.min(...arr);
// const max = Math.max(...arr);
// console.log(min);
// console.log(max);

// // copy arr----------

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [...arr1];

// console.log(arr1 === arr2); // false

// ===========================================rest============================================

// const arr1 = [3, 2, 1, 4, 5, 6, 7, 8, 9];
// const [first, ...props] = arr1;
// console.log(first);
// // console.log(props);

// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// }
// console.log(props);
// ----------------------------------------

// function foo(first, second, ...args) {
//   console.log(args);
// }
// foo(1, 2, 3, 4, 5, 6, 7);

// -----------------------------------------

// const arr1 = [3, 2, 1, 4, 5, 6, 7, 8, 9];

// function foo(first, second, ...rest) {
//   console.log(first, second, rest);
// }

// foo(...arr1);

// -----------------------------------------------------------Практика--------------------------------------------------

// --------------------------task 1 - Деструктуризація--------------------
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// /**
//  * РОзраховуємо індекс маси тіла людини
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));

//   const numericHeight = Number(height.replace(",", "."));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було

// // console.log(calcBMI("88,3", "1.75"));

// // console.log(calcBMI("68,3", "1.65"));

// // console.log(calcBMI("118,3", "1.95"));

// // Стало
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   }),
// );

// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   }),
// );

// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   }),
// );

// // --------------------------task 2 - Деструктуризація--------------------

// // Перпиши ф-цію такб щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// // --------------------------task 3 - Глибока деструктуризація--------------------
// Перепиши ф-цію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// // було

// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// // стало
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     repairBots: 150,
//     defenceBots: 50,
//   }),
// );

// function getBotReport({ companyName, repairBots, defenceBots }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // // --------------------------task 4 - Деструктуризація--------------------

// // Перепиши ф-цію так, щоб вона приймала об'єкт параметрів із вл-ми companyName та stock та виводила репорт про кількість товарів на складі будь-яої компанії.

// // було

// // function getStockReport(companyName, stock) {
// //   let total = 0;
// //   for (const value of Object.values(stock)) {
// //     total += value;
// //   }
// //   return `${companyName} has ${total} items in stock`;
// // }

// // console.log(
// //   getStockReport("Cyberdyne Systems", {
// //     repairBots: 150,
// //     defenceBot: 50,
// //   }),
// // ); // 'Cyberdyne Systems has 200 items in stock'

// // console.log(
// //   getStockReport("Bellaci", {
// //     shoes: 20,
// //     skirts: 10,
// //     hats: 5,
// //   }),
// // ); // 'Bellaci has 35 item in stock'

// // стало

// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBot: 50,
//     },
//   }),
// ); // 'Cyberdyne Systems has 200 items in stock'

// console.log(
//   getStockReport({
//     companyName: "Bellaci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // 'Bellaci has 35 item in stock'

// // --------------------------task 5 - Операція spread--------------------
// // Доповни ф-цію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими вл-ми id та createdAt, а також list зі значенням "default" якщо в PartialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: generatedId(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   }),
// );

// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@mail.com",
//   }),
// );

// function generatedId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// // --------------------------task 6 - Операція rest--------------------
// // Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Long",
//     email: "a.long@mail.com",
//     friendCount: 27,
//   }),
// );

// =========================================Задачі з практичної частини онлайн лекції==============================================================

// ===================вирахувати середній час та кількість гравців і вивести це повідомленням===================

// // const players = {
// //   Den: 60,
// //   Mark: 130,
// //   Gus: 45,
// //   Gluck: 120,
// //   Greg: 40,
// // };

// // let totalTime = 0;

// // function foo(obj) {
// //   for (const key in players) {
// //     totalTime += obj[key];
// //   }
// //   let countPayers = Object.keys(obj).length;
// //   let averangeTime = totalTime / countPayers;

// //   return `Було ${countPayers} користувачів, середній час оренди комп'ютера: ${averangeTime} хвилин`;
// // }
// // console.log(foo(players));

// // ----------------------або коротче

// const players = {
//   Den: 60,
//   Mark: 130,
//   Gus: 45,
//   Gluck: 120,
//   Greg: 40,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `Було ${values.length} користувачів, середній час оренди комп'ютера: ${
//     total / values.length
//   } хвилин`;
// }
// console.log(getTime(players));

// //===================Вивести імена друзів які читали книжку та підрахувати загальний вік всіх друзів===================

// const friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and Juliet"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     books: ["War and peace", "Romeo and Juliet"],
//   },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getNames(arr, bookName) {
//   let result = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       result.push(user.name);
//     }
//   }
//   return result.join(", ");
// }

// console.log(getNames(friends, "Harry Potter"));

// //---------------рахуємо суму віку користувачів

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     if (user.hasOwnProperty("age")) {
//       totalAge += user.age;
//     }
//   }
//   return totalAge;
// }

// console.log(getTotalAge(friends));

// // ===================Task - 4===================
// // 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// // 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       // points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],

//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getStudentsList(faculty) {
//     if (!(faculty in this)) {
//       return "Faculty not found 😥";
//     }
//     let names = [];
//     for (const student of this[faculty]) {
//       names.push(student.name);
//     }
//     return names.join(", ");
//   },

//   getTotalPoints(faculty) {
//     if (!(faculty in this)) {
//       return "Faculty not found 😥";
//     }

//     let total = 0;
//     for (const student of this[faculty]) {
//       if ("points" in student) {
//         total += student.points;
//       }
//     }
//     return total;
//   },
// };

// console.log(hogvarts.getStudentsList("griffindor"));
// console.log(hogvarts.getStudentsList("slizerin"));
// console.log(hogvarts.getStudentsList("sllizerin"));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("sllizerin"));

// ================Нотатки========================================

// const user = {
//   name: "Joe",
//   age: 30,
//   email: "joe@mail.com",
//   city: "New York",
// };

// const { name, age, email, city } = user;
// const userAge = age;
// const userName = name;

// console.log(userName);
// console.log(userAge);

// ------------------------

// const product1 = {
//   name: "Product A",
//   price: 20,
// };

// const product2 = {
//   color: "blue",
//   quantity: 50,
// };

// const combineProduct = { ...product1, ...product2 };
// console.log(combineProduct);

// ---------------------------------------------------------

// const user = {
//   name: "Joe",
//   age: 30,
//   email: "joe@mail.com",
//   city: "New York",
// };

// function getRemainingInfo({ name, age, ...rest }) {
//   return rest;
// }

// console.log(getRemainingInfo(user));

// ---------------------------------------------------------------------------------------------------------------------------------

// Напиши ф-цію так щоб вона повертала новий об'єкт із вл-тю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   }),
// );

// // Task - 4 - Деструктуризація
// // Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//   const values = Object.values(stock);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"//

// =========================================ДОДАТКОВА ПРАКТИКА 02.07.23==============================================================

// // Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// // Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

// function fillArray(num, str) {
//   let arr = [];
//   for (i = 0; i < num; i += 1) {
//     arr.push(str);
//   }
//   return arr;
// }
// console.log(fillArray(10, "k"));

//====================================================================================================================

// // Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function foo(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const elem of arr1) {
//     if (!arr2.includes(elem)) {
//       return false;
//     }
//     return true;
//   }
// }
// console.log(foo(arr1, arr2));
// console.log(foo(arr3, arr4));
// console.log(foo(arr5, arr6));
// console.log(foo(arr7, arr8));

//===========================================================================================================

// // Написати функцію, котра створить новий масив в якому
// // не буде значень, які приводяться до false

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function foo(array) {
//   let newArr = [];
//   for (const elem of array) {
//     if (!elem) continue;
//     newArr.push(elem);
//   }
//   return newArr;
// }
// console.log(foo(array));

//===============================================================================================================

// // Напишіть функцію caclculateAverage()
// // яка приймає довільну кількість
// // аргументів і повертає їхнє середнє значення.
// // Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const elem of args) {
//     if (typeof elem !== "number") {
//       continue;
//     }
//     count += 1;
//     sum += elem;
//   }
//   return sum / count;
// }
// console.log(caclculateAverage(1, 2, 3, 4, 5, 6, 7, fdfgdfgdfg));

// ========================================================================================================

// // Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// // Функція буде перебирати об'єкт.
// // Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// // const user = {
// //   name: "Igor",
// //   car: "Mercedes",
// //   carColor: "black",
// // };

// // function checkKeyInObject(obj, key) {
// //   for (const objKey in obj) {
// //     if (key === objKey) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// // console.log(checkKeyInObject(user, "dfd"));
// // console.log(checkKeyInObject(user, "car"));

// // інший варіант=========================

// // const user = {
// //   name: "Igor",
// //   car: "Mercedes",
// //   carColor: "black",
// // };

// // function checkKeyInObject(obj, key) {
// //   return Object.keys(obj).includes(key);
// // }

// // console.log(checkKeyInObject(user, "dfd"));
// // console.log(checkKeyInObject(user, "car"));

// // інший варіант============

// const user = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function checkKeyInObject(obj, key) {
//   return obj.hasOwnProperty(key);
// }

// console.log(checkKeyInObject(user, "dfd"));
// console.log(checkKeyInObject(user, "name"));
// console.log(checkKeyInObject(user, "car"));
// console.log(checkKeyInObject(user, "carColor"));

// ==========================================================================================================

// // Створіть об'єкт calculator із трьома методами:
// //read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
// //sum() - повертає суму збережених значень
// //mult() - перемножує збережені значення та повертає результат

// // const calculator = {
// //   read(a, b) {},
// //   sum() {},
// //   mult() {},
// // };

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(5, 8);
// console.log(calculator);
// calculator.sum(5, 8);
// console.log(calculator.sum());
// calculator.mult(5, 8);
// console.log(calculator.mult());

// ==========================================================================================================

// //. Напишіть функцію updateObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість)
// //які необхідно видалити з об'єкту.
// //Функція повертає новий об'єкт без зазначених параметрів.
// //Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

// function updateObject(obj, ...keys) {
//   const newObject = { ...obj };

//   for (const key of keys) {
//     delete newObject[key];
//   }
//   return newObject;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));

// =============================================================================================

// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 40 },
// ];

// function getPropertyValues(arr, key) {
//   let value = [];
//   for (const element of arr) {
//     value.push(element[key]);
//   }
//   return value;
// }
// console.log(getPropertyValues(myArr, "name"));
// console.log(getPropertyValues(myArr, "age"));

// ======================================================================================================

//  Напишіть функцію, яка приймає як параметр об'єкт
//і повертає масив значень у форматі [[key, value], [key, value], ...]
// де key і value - відповідно ключ і значення переданного об'екту.

// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// function foo(obj) {
//   return Object.entries(obj);
// }
// console.log(foo(user));
