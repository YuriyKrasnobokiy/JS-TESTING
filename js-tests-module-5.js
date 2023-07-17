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

// =============================Нотатки з записаної лекції=============================================

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

// // =====================Модуль 5.2 Прототипи та класи=======================================

// ------------------------------ОПП-------------------------

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

// ------------Геттери і Сеттери-----------------------

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// ---------------Статичні властивості--------------------------

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// ---------------Статичні методи--------------------------

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// ---------------Наслідування класів--------------------------

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");

// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// ---------------Конструктор дочірнього класу--------------------------

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// ---------------Методи дочірнього класу--------------------------

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// console.log(editor.posts); // []
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

// =============================Нотатки з записаної лекції=============================================

// // Example 1 - Блогер
// // Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// // email - пошта, рядок
// // age - вік, число
// // numberOfPosts - кількість постів, число
// // topics - масив тем на яких спеціалізується блогер
// // Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// // Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// // Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.email = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// -------------------------------------------------------------------------------------------------------------

// // Example 2 - Сховище
// // Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// // Додай методи класу:

// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     }
//     console.log("Такий товар вже є в наявності");
//   }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     if (!!~idx) {
//       // this.items.includes(item)
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// // storage.addItem("🍌");
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// -------------------------------------------------------------------------------------------------------------

// // Example 3 - User
// // Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (this.#login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge
// console.log(mango.email); // mango@dog.woof

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie
// console.log(poly.email); // poly@mail.com

// -------------------------------------------------------------------------------------------------------------

// // Example 4 - Нотатки
// // Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// // {
// //   LOW: 'low',
// //   NORMAL: 'normal',
// //   HIGH: 'high'
// // }
// // Додай методи addNote(note), removeNote(text) та updateNote(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(note) {
//     this.items = note;
//   }

//   addNote(note) {
//     const inArr = this.items.some(({ text }) => text === note.text);
//     if (!inArr) {
//       this.items.push(note);
//     }
//   }

//   removeNote(text) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx) {
//       // idx !== -1 або idx > -1
//       this.items.splice(idx, 1);
//     }
//   }

//   updateNote(text, newPriority) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx) {
//       // idx !== -1 або idx > -1
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// // myNotes.addNote({
// //   text: "Моя перша замітка",
// //   priority: Notes.Priority.LOW,
// // });

// // myNotes.addNote({
// //   text: ["Моя перша замітка"],
// //   priority: Notes.Priority.LOW,
// // });

// myNotes.addNote({
//   text: "Моя перша замітка",
//   priority: Notes.Priority.LOW,
// });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// ------------------НЕДОРОБИВ-------------------------------------------------------------------------------------------

// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   static on = false;
//   constructor({ isOpen: boolean }) {
//     this.#on = isOpen;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// =============================Нотатки з онлайн лекції=============================================

// // Task-1
// // Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також публічні гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#width = width;
//     this.#height = height;
//   }
//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log("Ширина повинна бути числом більшим за 0");
//     }
//   }
//   get height() {
//     return this.#height;
//   }
//   set height(newHeight) {
//     if (typeof newHeight === "number" && newHeight > 0) {
//       this.#height = newHeight;
//     } else {
//       console.log("Висота повинна бути числом більшим за 0");
//     }
//   }
// }

// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.width);

// item.width = 12;
// console.log(item.width);

// console.log(item.height);

// item.height = 7;

// console.log(item.height);

// ------------------------------------------------

// // Task-2
// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // name приватна властивість (ім'я, успадковується від User),
// // surname приватна властивість (прізвище, успадковується від User),
// // year (рік вступу до вузу).

// // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const diff = currentYear - this.year;

//     if (currentYear < this.year) {
//       return;
//     }

//     if (diff > 5) {
//       return `Студент - випускник`;
//     }
//     return `${diff} курс`;
//   }
// }

// const student = new Student("Петрик", "П'яточкин", 2019);
// console.log(student);
// console.log(student.getFullName()); // поверне "Петрик П'яточкин"
// console.log(student.getCourse()); // поверне 4 курс

// --------------------------------------------------------------

// // Task-3
// // Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість _balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому _balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//   #balance;
//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#changeBalance(amount);
//       console.log(`Здійснено депозит ${amount}`);
//       return;
//     }
//     console.log(`Сума має бути більша за 0`);
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log(`Сума має бути більша за 0`);
//     } else if (amount > this.#balance) {
//       console.log(`Недостатньо коштів на рахунку`);
//     } else {
//       this.#changeBalance(-amount);
//       console.log(`Здійснено зняття ${amount}`);
//     }
//   }

//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
// }

// const instance = new BankAccount();

// // ---депозит---

// instance.deposit(0);

// instance.deposit(-1);

// instance.deposit(100);
// console.log(instance);

// instance.deposit(1000);
// console.log(instance);

// instance.deposit(200);
// console.log(instance);

// // ---зняття---

// instance.withdraw(0);

// instance.withdraw(-100);

// instance.withdraw(1400);

// instance.withdraw(200);
// console.log(instance);

// instance.withdraw(300);
// console.log(instance);

// instance.withdraw(500);
// console.log(instance);

// --------------------------------------------------------------

// // Task-4
// // Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// // Також створи функціонал для підрахунку створених героїв

// // Властивість name має зберігати ім'я героя.
// // Властивість level має зберігати рівень героя.
// // Властивість health має зберігати поточний рівень здоров'я героя.
// // Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static counter = 0;
//   static addHero() {
//     this.counter += 1;
//     console.log("Кількість героїв ", this.counter);
//   }

//   #level;
//   constructor(name) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack() {
//     console.log(`Attack with 10 damage`);
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");

// bloodseker.heal();
// bloodseker.heal();
// bloodseker.heal();
// console.log(bloodseker);
// console.log(Hero.counter);

// ===============Додаткова практика====================================================================

// // Виконайте сортування масиву цін за спаданням та зростанням.

// const prices = [1000, 240, 670, 360, 89, 20];

// const sortPrices = [...prices].sort((a, b) => a - b);
// console.log(sortPrices);
// const sortB = [...prices].sort((a, b) => b - a);
// console.log(sortB);

// -------------------------------------------------

// // Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// // перебирає масив і додає до кожного ім'я привітання.
// // Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ["Ivan", "Maria", "Anna"];

// function sayHi(names) {
//   return names.map((name) => `${name} привіт!`);
// }
// console.log(sayHi(names));

// ----------------------------------------------

// // Напишіть стрілочну функцію, яка буде перевіряти
// // чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15];
// const someNumb = numbers.some((number) => number > 20);
// console.log(someNumb);

// -------------------------------------------------

// // Напишіть стрілочну функцію яка буд перевіряти чи всі студенти
// // у нашому масиві старші 18 років.

// const students = [
//   { name: "Alex", age: 17 },
//   { name: "Stas", age: 18 },
//   { name: "Mike", age: 22 },
//   { name: "Den", age: 20 },
// ];

// const someNumb = students.every((student) => student.age > 18);

// console.log(someNumb);

// -----------------------------------------------------

// // Напишіть функцію fruitsCount(), яка буде визначати загальну кількість
// // бананів, яблук і інших фруктів у масиві.
// // Функція приймає в якості параметра масив фруктів і повертає об'єкт:
// // ключ - назва фрукта, значення - кількість цих фруктів у масиві.
// // Результат роботи функції: Object { apples: 3, bananas: 1, oranges: 1, kiwi: 1 }

// const fruits = ["apples", "bananas", "oranges", "apples", "kiwi", "apples"];

// const fruitsCount = fruits.reduce((acc, fruit) => {
//   if (!acc[fruit]) {
//     acc[fruit] = 1;
//     return acc;
//   }

//   acc[fruit] += 1;
//   return acc;
// }, {});

// console.log(fruitsCount);

// ---------------------------------------------------------

// // Зібрати в allTopics масив всіх предметів всіх курсів.
// //Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap((elem) => elem.topics)
//   .filter((elem, idx, array) => array.indexOf(elem) === idx);
// console.log(allTopics);

// --------------------------------------------------------

// // у нас є масив користувачів, кожен з яких має поля id та name.
// //  Давайте знайдемо той де id = 1.

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const findId = users.find((user) => user.id === 1);
// console.log(findId.name);

// -------------------------------------------------------

// // Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const totalAge = friends
//   .filter((elem) => elem.sex === "m")
//   .reduce((acc, elem) => acc + elem.age, 0);

// console.log(totalAge);

// // Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// const girlPassport = friends
//   .filter((elem) => elem.sex === "f")
//   .map((elem) => elem.passport);

// console.log(girlPassport);

// --------------------------------------------------------

// //Напиши клас Rectangle який створює об'єкт
// //з ​​властивостями height, width
// //і методом calculateArea() для підрахунку прлощі прямокутника.

// // class Rectangle {
// //   constructor({ height, width }) {
// //     this.height = height;
// //     this.width = width;
// //   }
// //   calculateArea() {
// //     return this.height * this.width;
// //   }
// // }

// // const rect = new Rectangle({ height: 5, width: 8 });

// // console.log(rect);
// // console.log(rect.calculateArea());

// // ------без деструктиризації--------------

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rect = new Rectangle(5, 8);

// console.log(rect);
// console.log(rect.calculateArea());

// --------------------------------------------------------

// //Напиши клас Client який створює об'єкт
// //з ​​властивостями login, email
// //Оголоси приватні властивості #login #email,
// //доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const pedro = new Client({ login: "pedro", email: "pedro@mail.com" });

// console.log(pedro.login);
// console.log(pedro.email);

// pedro.login = "pedro13";
// pedro.email = "pedro13@mail.com";

// console.log(pedro.login);
// console.log(pedro.email);

// -------------------------------------------------------

// // Створи клас Phone який створює об'єкт з ​​властивістю price.
// // Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// // Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// // Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// // сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//   static MAX_PRICE = 40000;

//   #price;

//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//       return;
//     }
//   }
// }

// const proMax = new Phone(10000);
// console.log(proMax.price);
// proMax.price = 38000;
// console.log(proMax.price);

// -------------------------------------------------------

// // Є об'єкт і функція для підрахунку суми чисел.
// // Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = {
//   num: 2,
// };

// function add(a, b) {
//   return this.num + a + b;
// }

// // ---call
// console.log(add.call(obj, 3, 5));

// // ---apply
// console.log(add.apply(obj, [3, 5]));

// // ---bind
// const qwer = add.bind(obj, 3, 5);
// console.log(qwer());

// -------------------------------------------------------

// // Є два об'єкти, які описують деякі характеристики телефонів.
// // Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// // передаючи аргументом країну-виробник телефону.
// // "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: "AE8345FEDAS",
//   brand: "HUAWEI",
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: "AO8518FEGHT",
//   brand: "SAMSUNG",
// };

// tel.showInfo("China");

// tel.showInfo.call(tel_2, "South Korea");

// tel.showInfo.apply(tel_2, ["South Korea"]);

// const qwe = tel.showInfo.bind(tel_2, "Canada");

// qwe();

// -------------------------------------------------------

// // 1. Створіть об'єкт car з трьома властивостями
// // carBrand: "Audi Q3"
// // price: 23000
// // метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// // 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// // callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//   carBrand: "Audi Q3",
//   price: 23000,

//   getData() {
//     return `${this.carBrand} за ${this.price}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Ви замовили ${callback()}`);
// }
// makeMessage(car.getData.bind(car));

// -------------------------------------------------------

// // Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// // Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// // Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// // Виведіть у консоль значення властивості type для об'єкту fuji.
// // Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// // Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//   type: "fruit",
//   cookingMethod: ["jam", "juice", "baked", "dried", "fresh"],
//   vitamins: ["A", "B1", "B2", "E"],
// };

// const fuji = Object.create(apples);
// console.log(apples.isPrototypeOf(fuji));

// fuji.color = "pink";
// console.log(fuji.type);

// console.log(apples.hasOwnProperty("vitamins"));

// console.log(fuji.hasOwnProperty("cookingMethod"));
