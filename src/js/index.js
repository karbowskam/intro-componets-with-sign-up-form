import "../scss/_main.scss";



let newItemForm = document.getElementsByClassName("form");

newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let errors = false;

  let inputName = event.target.elements[0];
  let inputError = document.getElementsByClassName("form__input--name-js");
  if (inputName.value == null || inputName.value == "") {
    inputName.classList.add("form__input--danger");
    inputError[0].innerText = "First Name cannot be empty";
    errors = true;
  } else {
    inputName.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }

  let inputLastname = event.target.elements[1];
  inputError = document.getElementsByClassName("form__input--lastname-js");
  if (inputLastname.value == null || inputLastname.value == "") {
    inputLastname.classList.add("form__input--danger");
    inputError[0].innerText = "Last Name cannot be empty";
    errors = true;
  } else {
    inputLastname.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }

  let inputMail = event.target.elements[2];
  inputError = document.getElementsByClassName("form__input--mail-js");
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputMail.value.match(mailformat)) {
    inputMail.value = "";
    inputMail.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  } else {
    inputError[0].innerText = "Looks like this is not an email";
    inputMail.classList.add("form__input--danger");
    errors = true;
  }

  let inputPassword = event.target.elements[3];
  inputError = document.getElementsByClassName("form__input--password-js");
  if (inputPassword.value == null || inputPassword.value == "") {
    inputPassword.classList.add("form__input--danger");
    inputError[0].innerText = "Password cannot be empty";
    errors = true;
  } else {
    inputPassword.classList.remove("form__input--danger");
    inputError[0].innerText = "";
  }

var inputs = document.getElementsByClassName("form__input");

  if (!errors) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }
});





