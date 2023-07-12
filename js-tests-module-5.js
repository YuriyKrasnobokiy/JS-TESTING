// // ============================Модуль 5.1 Ключове слово this=======================================
// // ============================Нотатки з конспекта=======================================
// // ------------this в методі об'єкта---------------------------

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// // ------------this в колбека-функціях---------------------------

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// // ------------this у стрілочних функціях---------------------------

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// ---------------------------------------------

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// ====================================Нотатки з записаної лекції=============================================

// const objA = {
//   name: "User name",
//   nickName() {
//     console.log(this);
//   },
// };

// objA.nickName(); // objA

// --------------------------

// const objB = {
//   name: "User name",
//   nickName: () => {
//     console.log(this);
//   },
// };

// objB.nickName(); // Window

// -----------------------------------------------

// const objA = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     nickName() {
//       console.log(this);
//     },
//   },
// };

// objA.skills.nickName(); //  { mySkill: "html", nickName: f}

// --------------------------------------------------------

// const objA = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       nickName() {
//         console.log(this);
//       },
//     },
//   },
// };

// objA.skills.someValue.nickName(); // {value: 10, nickName: ƒ}

// -------------------------------------------------------

// const objB = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       nickName: () => {
//         console.log(this);
//       },
//     },
//   },
// };

// objB.skills.someValue.nickName(); // window

// ---------------------------------------------------------

// const objB = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       foo() {
//         const nickName = () => {
//           console.log(this);
//         };
//         nickName();
//       },
//     },
//   },
// };

// objB.skills.someValue.foo(); // {value: 10, foo: ƒ}

//-------------------------------------------------------

// const objB = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       foo: () => {
//         console.log(this);
//         const nickName = () => {
//           console.log(this);
//         };
//         nickName();
//       },
//     },
//   },
// };

// objB.skills.someValue.foo(); // window

//-------------------------------------------------------

// const objB = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       foo: () => {
//         function nickName() {
//           console.log(this);
//         }
//         nickName();
//       },
//     },
//   },
// };

// objB.skills.someValue.foo(); // window

//-------------------------------------------------------

// "use strict";
// const objB = {
//   name: "User name",
//   skills: {
//     mySkill: "html",
//     someValue: {
//       value: 10,
//       foo: () => {
//         function nickName() {
//           console.log(this);
//         }
//         nickName();
//       },
//     },
//   },
// };

// objB.skills.someValue.foo(); // undefind (бо строгий режим)

// --------------------------------------------------------------

// const objA = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   },
// };

// const objB = {
//   age: 12,
//   someFunction: objA.myAge,
// };

// objB.someFunction(); // objB

// --------------------------------------------------------------

// const objA = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   },
// };

// const objB = {
//   age: 12,
//   someFunction: objA.myAge,
// };
// objB.someFunction(); // objB

// const objC = {
//   age: 13,
//   somecrazy: objB.someFunction,
// };

// objC.somecrazy(); // objC

// -----------------------------------------------------

// const objA = {
//   name: "A",
//   foo() {
//     console.log(this);
//   },
// };

// objA.foo(); // objA;

// -----------------------------------------------------

// const objA = {
//   name: "A",
//   foo: () => {
//     console.log(this);
//   },
// };

// objA.foo(); // window

// -----------------------------------------------------

// "use strict";
// const objA = {
//   name: "A",
//   foo: () => {
//     console.log(this);
//   },
// };

// objA.foo(); // window

// ------------------------------------------------------------
// ------------------метод call-------------------------------

// const objA = {
//   name: "A",
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };

// objA.myAge(22, 44);

// const objB = {
//   name: "B",
// };

// const objC = {
//   name: "C",
// };

// objA.myAge.call(objB, 1, 2);
// objA.myAge.call(objC, 10, 20);

// ------------------метод apply-------------------------------

// const objA = {
//   name: "A",
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };

// objA.myAge(22, 44);

// const objB = {
//   name: "B",
// };

// const objC = {
//   name: "C",
// };

// objA.myAge.apply(objB, [1, 2]);
// objA.myAge.apply(objC, [10, 20]);

// / ------------------метод bind-------------------------------

// const objA = {
//   name: "A",
//   myAge(a, b, c, d) {
//     console.log(this, a, b, c, d);
//     return "Some value";
//   },
// };

// const objB = {
//   name: "B",
// };

// const objC = {
//   name: "C",
// };

// const result = objA.myAge.bind(objB);
// const result2 = objA.myAge.bind(objC);
// objA.myAge();

// result(9, 8, 7, 6);
// result2(11, 22, 33, 44);

// ------------------Практика----------------------------------

// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     {
//       name: "Emerald",
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: "Diamond",
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: "Sapphire",
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: "Ruby",
//       price: 800,
//       quantity: 2,
//     },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName,
//     );
//     return price * quantity;
//   },
// };

// const shop2 = {
//   stones: [
//     {
//       name: "Щебінь",
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: "Пісок",
//       price: 2700,
//       quantity: 3,
//     },
//   ],
// };

// console.log(chopShop.calcTotalPrice.call(shop2, "Щебінь")); // 5200
// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// ----------------------------------------------------

// // Example 2 - Телефонна книга
// // Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// // ---------було---------
// // const phonebook = {
// //   contacts: [],
// //   add(contact) {
// //     const newContact = {
// //       list: "default",
// //       ...contact,
// //       id: generateId(),
// //       createAt: getDate(),
// //     };
// //     this.contacts.push(newContact);
// //   },
// //   generateId() {
// //     return "_" + Math.random().toString(36).substr(2, 9);
// //   },
// //   getDate() {
// //     return Date.now();
// //   },
// // };

// // console.log(
// //   phonebook.add({
// //     name: "Mango",
// //     email: "mango@meil.com",
// //     list: "friends",
// //   }),
// // );

// // --------------стало------------

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   }),
// );

// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   }),
// );

// -----------------------------------------------------------

// // Example 3 - Калькулятор
// // Створіть об'єкт calculator з трьома методами:

// // read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// // add() - повертає суму збережених значень.
// // mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };

// calculator.read(3, 0);

// console.log(calculator.add());

// console.log(calculator.mult(1, 2));

// console.log(calculator);

// ====================================Нотатки з онлайн лекції=============================================

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки прискорення в системі круїз контролю.

// const car = {
//   brand: "Audi",
//   speed: 0,
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`,
//     );
//   },
//   decrease() {
//     this.speed -= 10;
//     console.log(
//       `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed}`,
//     );
//   },
// };

// const car2 = {
//   brand: "BMW",
//   speed: 40,
//   accelerate: car.accelerate,
// };

// const car3 = {
//   brand: "volvo",
//   speed: 70,
// };

// const bmw = car.accelerate.bind(car2);
// const bmwDecrease = car.decrease.bind(car2);
// const volvo = car.accelerate.bind(car3);

// bmw();
// bmw();
// bmwDecrease();
// bmwDecrease();
// bmwDecrease();
// bmwDecrease();
// bmwDecrease();
// bmwDecrease();
// bmwDecrease();
// // for (let i = 0; i < 8; i += 1) {
// //     bmw()
// // }

// -------------------------------------------------------------------------------

// Task - 2
// Потрібно створити систему для продажу в інтернет магазині.
// Є об'єкт продукта в якому потрібно створити метод discount(буде приймати знижку клієнта в %) який буде повертати вартість товара з врахуванням знижки
// Є об'єкт клієнта який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунки вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "smartphone",
//   price: 500,
//   discount(percent) {
//     return (this.price * (100 - percent)) / 100;
//   },
// };

// const client = {
//   name: "Alice",
//   discountPercent: 8,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}грн`,
//     );
//   },
// };

// const client2 = {
//   name: "Kate",
//   discountPercent: 4,
// };

// const client3 = {
//   name: "Annet",
//   discountPercent: 0,
// };

// client.purchase.call(client);
// client.purchase.call(client2);
// client.purchase.call(client3);
// client.purchase();

// -------------------------------------------------------------------------------------

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const tesla = {
//   brand: "Tesla",
//   speed: 70,
// };

// const audi = {
//   brand: "Audi",
//   speed: 120,
// };

// function speedSensor(maxSpeed) {
//   // if (this.speed <= maxSpeed) {
//   //   console.log(`Авто ${this.brand} рухається з безпечною швидкістю`);
//   // } else {
//   //   console.log(`Авто ${this.brand} перевищило безпечну швидкість!!! 😨`);
//   // }

//   // ----------через тернарник-----------

//   return this.speed <= maxSpeed
//     ? console.log(`Авто ${this.brand} рухається з безпечною швидкістю`)
//     : console.log(`Авто ${this.brand} перевищило безпечну швидкість!!! 😨`);
// }

// speedSensor.call(audi, 70);

// speedSensor.call(tesla, 70);

// --------------------------------------------------------------------------------------------------------

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   read(a = 0, b = 0) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };

// calculator.read(3, 4);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// --------------------------------------------------------------------------

// ||

// 6 false значень
// 0
// ''
// NaN
// undefined
// null
// false

// console.log(1 || 'Hello');
// console.log(0 || false);
// console.log(false || NaN);

// ??
// null
// undefined

// console.log(false ?? "hello");
// console.log(null ?? "hello");
// console.log(undefined ?? "hello");
// console.log(null ?? undefined);
// console.log(undefined ?? null);

// // ============================Модуль 5.2 Прототипи та класи=======================================

// ----------------ОПП---------

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
// console.log(employee.getWage());

// --------------------------Прототип об'єкта-----------------------

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// const cat = Object.create(null);
// cat.name = "Poly";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(animal.isPrototypeOf(cat)); // false

// console.log(dog.hasOwnProperty("name")); // true

// console.log(dog.name); // 'Манго'
// console.log(cat.name); // "Poly"

// ---------------Метод hasOwnProperty()-----------------------------

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// ------------------------------

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// -------------------Класи-----------------------------------------

// class User {}

// const mango = new User();
// console.log(mango); // {}

// -------------------------

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@hotmail.com");
// console.log(mango);

// ------------------------Об'єкт параметрів-------------------------------------------------------

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango);

// ------------------------Методи класу-------------------------------------------------------

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     returnthis.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@meil.com",
// });

// mango.changeEmail("qwerty@meil.com");
// console.log(mango);

// ------------------------Приватні властивості-------------------------------------------------------

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// mango.changeEmail("mango@hottymail.com");
// console.log(mango.getEmail()); // mango@hottymail.com

// console.log(mango.#email); //Private field '#email' must be declared in an enclosing class
