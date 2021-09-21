/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/

const inputEl = document.querySelector('input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  let message = '';
  for (let i = 1; i <= amount; i += 1) {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    message += `<div class="box" style="width:${size}px; height:${size}px; background-color: #${color}"></div>`;
    size += 10;
  }
  inputEl.value = '';
  return boxesEl.insertAdjacentHTML('beforeend', message);
}

renderBtnEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
  const amount = inputEl.value;
  createBoxes(amount);
});

destroyBtnEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});
