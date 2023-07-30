// ===============================Модуль 6.1========================================================
// ===============================Додаткова практика========================================================
// ========================================TASK 1==========================================

// // При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// // вивести значення, яке будемо вводити в інпут.

// const button = document.querySelector("#alertButton");

// const input = document.querySelector("#alertInput");

// button.addEventListener("click", handlerClick);

// function handlerClick() {
//   const text = input.value;
//   alert(text);
// }

// =====================================TASK 2=============================================

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const button = document.querySelector("#passwordButton");

// const input = document.querySelector("#passwordInput");

// button.addEventListener("click", foo);
// function foo() {
//   if (input.type === "text") {
//     button.textContent = "Показати";
//     input.type = "password";
//   } else {
//     button.textContent = "Приховати";
//     input.type = "text";
//   }
// }

// ===================================TASK 3===============================================

// // Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// // Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const buttonDecrease = document.querySelector("#decrease");
// const buttonIncrease = document.querySelector("#increase");
// const box = document.querySelector("#box");

// buttonDecrease.addEventListener("click", handlerClick);

// buttonIncrease.addEventListener("click", handlerClick);

// function handlerClick(evt) {
//   const id = evt.currentTarget.id;
//   const width = box.offsetWidth;
//   const height = box.offsetHeight;

//   if (id === "increase") {
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;
//   } else {
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;
//   }
// }

// ===================================TASK 4===============================================

// // При натисканні на кнопку "SWAP ME" зробити так, щоб значення двох інпутів
// // мінялися місцями. Тобто значення правого інпуту стало на місце лівого і навпаки.

// const swapButton = document.getElementById("swapButton");

// const leftSwapInput = document.getElementById("leftSwapInput");

// const rightSwapInput = document.getElementById("rightSwapInput");

// swapButton.addEventListener("click", onClick);

// function onClick() {
//   const firstValue = leftSwapInput.value;

//   leftSwapInput.value = rightSwapInput.value;

//   rightSwapInput.value = firstValue;
// }

// ===================================TASK 5===============================================

// // При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// // елементі списку в два рази.

// const listItem = document.querySelectorAll(".listItem");

// const button = document.querySelector("#double");

// button.addEventListener("click", onclick);

// function onclick() {
//   listItem.forEach((elem) => (elem.textContent = elem.textContent * 2));
// }

// ===================================TASK 6===============================================

// // При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const checkboxForm = document.querySelector(".checkboxForm");

// const checkboxWrappers = document.querySelectorAll(".checkboxWrapper");

// checkboxForm.addEventListener("submit", onChange);

// function onChange(evt) {
//   evt.preventDefault();
//   const arr = [...checkboxWrappers].filter(
//     (elem) => elem.lastElementChild.checked,
//   );
//   arr.forEach((elem) => elem.remove());
// }

// ==================================TASK 7================================================

// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const sortByNameButton = document.querySelector("#sortByNameButton");

// const sortByLastNameButton = document.querySelector("#sortByLastNameButton");

// const people = document.querySelectorAll(".person");
// const list = document.querySelector(".people");

// sortByNameButton.addEventListener("click", onByNameClick);

// function onByNameClick() {
//   const arr = [...people].sort((a, b) =>
//     a.textContent.localeCompare(b.textContent),
//   );
//   list.innerHTML = "";
//   list.append(...arr);
// }

// sortByLastNameButton.addEventListener("click", onByLastnameClick);

// function onByLastnameClick() {
//   const arr = [...people].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[1].toLowerCase();
//     const secondValue = b.textContent.split(" ")[1].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });
//   list.innerHTML = "";
//   list.append(...arr);
// }

// ===================================TASK 8===============================================

// // Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const contactsFilter = document.querySelector(".contactsFilter");
// const contacts = document.querySelector(".contacts");
// const allContacts = document.querySelectorAll(".contact");

// contactsFilter.addEventListener("input", onInput);

// function onInput(evt) {
//   const search = evt.currentTarget.value;
//   const filterResult = [...allContacts].filter((elem) =>
//     elem.textContent.toLocaleLowerCase().includes(search),
//   );
//   contacts.innerHTML = "";
//   contacts.append(...filterResult);
// }
