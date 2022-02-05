function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let boxSize = Math.floor(Math.random() * (150 - 100)) + 100;

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesWrap: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").firstElementChild,
};
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const boxesQuantity = renderBoxes(refs.inputEl.value);
  refs.boxesWrap.setAttribute("style", "display:flex; flex-wrap:wrap;");
  refs.boxesWrap.append(...boxesQuantity);
}

function renderBoxes(amount) {
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = "Block";
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxElements.push(boxEl);
  }
  return boxElements;
}

function destroyBoxes() {
  refs.boxesWrap.innerHTML = "";
}
