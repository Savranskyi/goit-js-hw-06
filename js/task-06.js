const inputRefs = document.querySelector("#validation-input");

inputRefs.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === +inputRefs.dataset.length) {
    inputRefs.setAttribute("class", "valid");
  } else {
    inputRefs.setAttribute("class", "invalid");
  }
});
