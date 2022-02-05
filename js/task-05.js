const inputRefs = document.querySelector("#name-input");
const outputRefs = document.querySelector("#name-output");

inputRefs.addEventListener("input", (event) => {
  outputRefs.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});
