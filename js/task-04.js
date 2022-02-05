let counterValue = document.querySelector("#value");

const incrementBtb = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtb.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

function increment() {
  counterValue.textContent = +counterValue.textContent + 1;
}

function decrement() {
  counterValue.textContent = +counterValue.textContent - 1;
}
