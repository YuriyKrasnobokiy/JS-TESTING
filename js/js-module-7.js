// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

// const combinations = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [1, 5, 9],
//   [3, 5, 7],
//   [3, 6, 9],
// ];

// const container = document.querySelector(".js-content");
// let player = "X";
// const historyX = [];
// const historyO = [];
// createMarkup();

// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="item js-item" data-id='${i}'></div>`;
//   }
//   container.innerHTML = markup;
// }

// container.addEventListener("click", handlerClick);

// function handlerClick(evt) {
//   if (!evt.target.classList.contains("js-item") || evt.target.textContent) {
//     return;
//   }

//   const itemId = Number(evt.target.dataset.id);
//   let result = false;

//   if (player === "X") {
//     historyX.push(itemId);
//     result = historyX.length >= 3 && checkWinner(historyX);
//   } else {
//     historyO.push(itemId);
//     result = historyO.length >= 3 && checkWinner(historyO);
//   }

//   if (result) {
//     const instance = basicLightbox.create(`
// 	<div class="box">
//     <h1>
//       Player - ${player} is Winner 😎
//     </h1>
//   </div>
// `);

//     instance.show(() => restart());
//     return;
//   }

//   const isEnd = historyX.length + historyO.length === container.children.length;

//   if (isEnd) {
//     const instance = basicLightbox.create(`
//     <div class="box">
//       <h1>
//         Game Over!
//         There are no winner 😂
//       </h1>
//     </div>
//   `);
//     instance.show(() => restart());
//     return;
//   }

//   evt.target.textContent = player;
//   player = player === "X" ? "O" : "X";
// }

// function checkWinner(arr) {
//   return combinations.some((item) => item.every((id) => arr.includes(id)));
// }

// function restart() {
//   player = "X";
//   historyX.splice(0, historyX.length);
//   historyO.splice(0, historyO.length);

//   createMarkup();
// }
