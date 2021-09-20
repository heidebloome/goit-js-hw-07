/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textEl.style.fontSize = `${event.target.value}` + 'px';
}