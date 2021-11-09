import "../scss/_main.scss";

let newItemForm = document.getElementsByClassName("form");

newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = event.target.elements[0];
  let inputError = document.getElementsByClassName("form__input--name-js");
  if (inputName.value == null || inputName.value == "") {
    inputName.classList.add("form__input--danger");
    inputError[0].innerText = "First Name cannot be empty";
  }
    else {
    inputName.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }
});

newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let inputLastname = event.target.elements[1];
  let inputError = document.getElementsByClassName("form__input--lastname-js");
  if (inputLastname.value == null || inputLastname.value == "") {
    inputLastname.classList.add("form__input--danger");
    inputError[0].innerText = "Last Name cannot be empty";
  }
    else {
    inputLastname.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }
});

newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let inputMail = event.target.elements[2];
  let inputError = document.getElementsByClassName("form__input--mail-js");
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputMail.value.match(mailformat)) {
    inputMail.value = "";
    inputMail.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  } else {
    inputError[0].innerText = "Looks like this is not an email";
    inputMail.classList.add("form__input--danger");
  }
});


newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let inputPassword = event.target.elements[3];
  let inputError = document.getElementsByClassName("form__input--password-js");
  if (inputPassword.value == null || inputPassword.value == "") {
    inputPassword.classList.add("form__input--danger");
    inputError[0].innerText = "Password cannot be empty";
  }
    else {
    inputPassword.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }
});

var btnClear = document.getElementsByClassName("form");
var inputs = document.getElementsByClassName("form__input");

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});
