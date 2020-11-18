// Переменные 
const inputСontainer = document.querySelector('.input-container');
const notesContainer = document.querySelector('.notes-container');
const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');
const array = ['color-blue', 'color-yellow', 'color-green', 'color-red', 'color-salad', 'color-violet'];
let x = 1;

// Функции 
function crossOut(event) {
  if (event.target.classList[0] == 'check') {
    document.getElementById(event.target.parentElement.id).classList.toggle('completed-task');
  }
}

function newCard() {
  if (textInput.value !== '') {
    const checkColor = document.querySelector('input.color:checked');
    const color = checkColor == null ? array[Math.floor(Math.random() * array.length)] : checkColor.classList[1];

    const template =
      `<div id="${x}" class="container ${color}">
      <input type="checkbox" class="check">
      <div class="text">${textInput.value}<label></label></div>
    </div>`;

    x++;
    textInput.value = '';
    if (checkColor) checkColor.checked = false;
    const element = document.querySelector('.notes-container');
    element.insertAdjacentHTML("beforeend", template.trim());
    return element.firstChild;
  }
  else alert('Заполните поле!');
}

// Обработчики событий
button.addEventListener('click', newCard);
notesContainer.addEventListener('click', crossOut)

