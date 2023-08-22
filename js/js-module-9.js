// =====================================Нотатки з конспекту================================================================
// setTimeout(() => {
//   console.log("Hello World!");
// }, 5000);

// const timerId = setInterval(() => {
//   console.log("Hello!");
// }, 3000);
// clearInterval(timerId);

// const date = new Date();
// console.log(date.getTime());

// const teamMeetDate = new Date("October 04, 2023, 16:15:45 ");
// console.log(teamMeetDate);

// const date = new Date("2030-03-16");
// const date1 = new Date("2030-03");
// const date2 = new Date("2018");
// const date3 = new Date("03/16/2030");
// const date4 = new Date("2030/03/16");
// const date5 = new Date("2030/3/16");
// const date6 = new Date("March 16, 2030");
// const date7 = new Date("March 16, 2030 14:25:00");
// const date8 = new Date("2030-03-16 14:25:00");
// const date9 = new Date("2030-03-16T14:25:00");
// const date10 = new Date("16 March 2030");

// console.log(date);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
// console.log(date6);
// console.log(date7);
// console.log(date8);
// console.log(date9);
// console.log(date10);

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// =====================ПРОМІСИ=======================================
// =======================Нотатки з лекції==============================
//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// addEventListner

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err));
// Promise.resolve("D").then((value) => console.log(value)).catch(err => console.log(err));

// setTimeout(() => console.log("E"), 0);

// console.log("F");

//*************** Promise *******************\\

// ****Створення Promise**** \\

// const promise = new Promise((res, rej) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       res([{ name: "Alice" }, {name: 'Kate'}]);
//     } else {
//       rej("Error 😥");
//     }
//   }, 1000);
// });

// ****Обробка Promise**** \\
// console.log(typeof promise);
// promise
//   .then(
//     (data) => {
//       console.log(data);
//       return data
//     }
//   ).then((value) => {value.map(item => console.log(item.name))})

//   .catch((err) => {
//     console.log(err);
//     // location.href = './error.html'
//   })
//   .finally(() => {
//     console.log("Я виконався після then або catch");
//   });

// console.log(fetch("https://swapi.dev/api/starships/"));
// .then((response) => response.json())
// .then(data => console.log(data))

// =====================================Нотатки з конспекту================================================================

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const makeGreeting = (guestName) => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Poly")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
