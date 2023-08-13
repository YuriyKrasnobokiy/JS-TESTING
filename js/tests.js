// // // Task - 1
// // // Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (arr) =>
//   arr.forEach((elem, idx) => console.log(`${idx + 1} - ${elem}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// // // Task - 2
// // // Напишіть наступні функції:
// // // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

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

// function logTotalPrice({ quantity, price }) {
//   console.log(`Product total price ${price * quantity}`);
// }

// createProduct(
//   { name: "🍎", price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice,
// );

// createProduct(
//   { name: "🍋", price: 20, quantity: 5 },
//   logProduct,
//   logTotalPrice,
// );

// //  Task - 3
// // Напишіть функцію яка буде отримувати 2 параметри.
// // 1 - масив чисел.
// // 2 - функцію яка має опрацювати кожен елемент масиву.
// // Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// // function each(arr, action) {
// //   const items = [];
// //   arr.forEach((elem) => {
// //     const result = action(elem);
// //     items.push(result);
// //   });
// //   return items;
// // }

// // -------коротший запис

// function each(arr, action) {
//   const items = [];
//   arr.forEach((elem) => items.push(action(elem)));
//   return items;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.ceil(value)));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.floor(value)));

// -------------------

// // // Task-4
// // // Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.  У випадку помилки, викликається errorCallback і передається повідомлення про помилку.

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

// function getProductDetails(id, success, error) {
//   for (const product of products) {
//     if (product.id === id) {
//       success(product);
//       return;
//     }
//   }
//   error();
// }

// getProductDetails(1, handleSuccess, handleError);
// getProductDetails(11, handleSuccess, handleError);

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product not found`);
// }

// ------------------------------------------------------------------------

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

// // // Task-2
// // // Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// // function getAdults(arr) {
// //   return arr.filter((item) => item.age > 20);
// // }

// // console.log(getAdults(students));

// // -------------з деструктуризацією-----------------------

// function getAdults(arr) {
//   return arr.filter(({ age }) => age > 20);
// }

// console.log(getAdults(students));

// ------------------------------------------------------

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
//   return arr.find(({ title: bookTitle }) => bookTitle === title) || "Not found";
// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software",
//   ),
// );
// console.log(getBook(books, "Design"));

// --------------------------------------------------------

// // // Task-4
// // // Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами. Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   return arr.reduce((acc, { price, quantity }) => (acc += price * quantity), 0);
// }

// console.log(getTotal(products));

// // // Task-5
// // // Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку. Результат повинен бути відсортованим масивом книжок за роком видання.

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

// function getSortedBooks(arr) {
//   return [...arr].sort((a, b) => b.year - a.year);
// }

// console.log(getSortedBooks(books));

// // Task-6
// // Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getNames(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }

// console.log(getNames(products));

// // Task-7 HARD 😈

// // // Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
// const str = "absdabsrgbadgtdswwbetflg";
// // // Результат на який очікуємо
// // // const obj = {
// // //     a: 3,
// // //     b: 4,
// // //     s: 3,
// // //     // ...
// // // }

// const obj = str.split("").reduce((acc, item) => {
//   if (acc.hasOwnProperty(item)) {
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log(obj);

// --------------------------------------------------------------------------------
// // Task - 1
// // Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки прискорення в системі круїз контролю.

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
//     if (this.speed <= 0) {
//       console.log(`Авто зупинилось`);
//       return;
//     }
//     this.speed -= 10;
//     console.log(
//       `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed}`,
//     );
//   },
// };

// const car2 = {
//   brand: "BMW",
//   speed: 40,
//   // accelerate: car.accelerate,
// };

// const car3 = {
//   brand: "Volvo",
//   speed: 70,
// };

// const bmw = car.accelerate.bind(car2);
// const volvo = car.accelerate.bind(car3);
// const bmwDecr = car.decrease.bind(car2);
// const volvoDecr = car.decrease.bind(car3);

// // volvo();
// // volvo();
// // volvo();
// // // bmw();
// // // bmw();

// for (let i = 0; i < 8; i += 1) {
//   bmw();
// }
// for (let i = 0; i < 13; i += 1) {
//   bmwDecr();
// }
// for (let i = 0; i < 8; i += 1) {
//   volvo();
// }
// for (let i = 0; i < 16; i += 1) {
//   volvoDecr();
// }

// // Task - 2
// // Потрібно створити систему для продажу в інтернет магазині.
// // Є об'єкт продукта в якому потрібно створити метод discount(буде приймати знижку клієнта в %) який буде повертати вартість товара з врахуванням знижки
// // Є об'єкт клієнта який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунки вартості товару та логувати повідомлення про покупку
// // Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

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
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price} грн`,
//     );
//   },
// };

// const client2 = {
//   name: "Kate",
//   discountPercent: 4,
// };

// client.purchase.call(client2);
// client.purchase();

// // // Task - 3
// // Потрібно створити функціонал для контролю швидкості прокатних авто.
// // Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// // та виводити повідомлення чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const tesla = {
//   brand: "Tesla",
//   speed: 70,
// };

// const audi = {
//   brand: "Audi",
//   speed: 120,
// };

// function checkSpeed(maxSpeed) {
//   return this.speed <= maxSpeed
//     ? `Авто ${this.brand} рухається з безпечною швидкістю 😉`
//     : `Авто ${this.brand} перевищило безпечну швидкість 😨`;
// }

// console.log(checkSpeed.call(tesla, 70));
// console.log(checkSpeed.call(audi, 70));

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

// calculator.read(4);

// console.log(calculator.add(4, 5));

// console.log(calculator.mult(4, 5));

// ---------------------------------------------------------------------------------------------------------------------

// // // Task-1
// // // Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також публічні гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height }) {
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }

//   setWidth(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log(`Ширина повинна бути числом більшим за нуль`);
//     }
//   }

//   getHeight() {
//     return this.#height;
//   }

//   setHeight(newHeight) {
//     if (typeof newHeight === "number" && newHeight > 0) {
//       this.#height = newHeight;
//     } else {
//       console.log(`Висота повинна бути числом більшим за нуль`);
//     }
//   }
// }

// const item = new Rectangle({
//   width: 7,
//   height: 5,
// });

// console.log(item.getWidth());
// console.log(item.getHeight());

// item.setWidth(0);
// item.setWidth("troll");
// item.setWidth(10);

// item.setHeight(-1);
// item.setHeight("qwe");
// item.setHeight(13);

// console.log(item.getWidth());
// console.log(item.getHeight());

// ------------------------------------------------------------------------

// // // Task-2
// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).

// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // // const student = new Student('Петрик', 'Пяточкин', 2019);
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
//       return `"студент" ще вчиться в школі 😂`;
//     }

//     if (diff > 5) {
//       return `"студент" являється випускником 😂`;
//     }
//     return `${diff} курс`;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2019);

// console.log(student.getFullName());
// console.log(student.getCourse());

// ----------------------------------------------------------------------------------

// // // Task-3
// // // Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість _balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому _balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//   #balance;

//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#changeBalance(amount);
//       console.log(`здійснено депозит на суму ${amount}`);
//       return;
//     }

//     console.log(`Сума має бути більша за 0`);
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log(`Сума зняття має бути більшою за 0`);
//     } else if (amount > this.#balance) {
//       console.log(`Nice try 😂`);
//     } else {
//       this.#changeBalance(-amount);
//       console.log(`Знято ${amount}`);
//     }
//   }

//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
// }

// const instance = new BankAccount();
// instance.deposit(0);
// instance.deposit(-1);
// instance.deposit(1200);
// instance.withdraw(0);
// instance.withdraw(-1);
// instance.withdraw(1400);
// instance.withdraw(1000);

// console.log(instance);

// -----------------------------------------------------

// // // Task-4
// // // Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// // // Також створи функціонал для підрахунку створених героїв

// // // Властивість name має зберігати ім'я героя.
// // // Властивість level має зберігати рівень героя.
// // // Властивість health має зберігати поточний рівень здоров'я героя.
// // // Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static counter = 0;
//   static addHero() {
//     this.counter += 1;
//     console.log(`Кількість героїв ${this.counter}`);
//   }
//   constructor(name) {
//     this.name = name;
//     this.level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack() {
//     console.log(`Герой наніс 10 одиниць урону`);
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");
// const bloodseker4 = new Hero("Bloodseker");
// const bloodseker5 = new Hero("Bloodseker");
// const bloodseker6 = new Hero("Bloodseker");
// const bloodseker7 = new Hero("Bloodseker");
// const bloodseker8 = new Hero("Bloodseker");
// console.log(bloodseker);
// console.log(bloodseker.heal());

// ============CODEWARS========== Пошук двух мінімальних чисел та вивести суму їх==================

// function sumTwoSmallestNumbers(numbers) {
//   const min = Math.min(...numbers);

//   const newArr = numbers.filter((elem) => elem > min);

//   const secondMin = Math.min(...newArr);
//   const sum = min + secondMin;
//   return sum;
// }
// console.log(
//   sumTwoSmallestNumbers([5, 1, 12, 2, 22, 45, 47, 45, 41, 41, 42, 46, 48]),
// );

// =======================CODEWARS===================

// function solution(string) {
//   string = string.replace(/([A-Z])/g, " $1");
//   return string;
// }

// console.log(solution("helloWorldCrowDigPig"));

// -----------------else variant-------------------------

// function solution(string) {
//   const result = [];
//   const strArr = string.split("");
//   console.log(strArr);
//   const alphabet = "QWERTYUIOPLKJHGFDSAZXCVBNM";
//   for (let i = 0; i < strArr.length; i += 1) {
//     if (alphabet.includes(strArr[i])) {
//       strArr[i] = " " + strArr[i];
//       result.push(strArr[i]);
//     } else {
//       result.push(strArr[i]);
//     }
//   }
//   return result.join("");
// }

// console.log(solution("helloWorldCrowDigPig"));
