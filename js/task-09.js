function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const outputColorEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  changeColorText(newColor);
}

function changeColorText(color) {
  outputColorEl.textContent = color;
}
