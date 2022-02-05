const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value && password.value) {
    const formOutput = { email: email.value, password: password.value };
    event.currentTarget.reset();
    return console.log(formOutput);
  }
  event.currentTarget.reset();
  return alert("Заполните, пожалуйста, все поля формы!");
}
