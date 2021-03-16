const username = document.querySelector("input.name");
const mail = document.querySelector("input.mail");
const txtArea = document.querySelector("textarea.msg");

const btnSend = document.querySelector(".send");
const btnOk = document.querySelector(".ok");
const popup = document.querySelector(".popup");

const nameError = document.querySelector(".name-error");
const mailError = document.querySelector(".mail-error");
const txtError = document.querySelector(".txt-error");

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");
  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} musi składać się z min. ${min} znaków`
    );
  }
};

const checkMail = (mail) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(mail.value)) {
    clearError(mail);
  } else {
    showError(mail, "E-mail jest niepoprawny!");
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("popup-show");
  }
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, mail, txtArea]);
  checkLength(username, 3);
  checkLength(txtArea, 10);
  checkMail(mail);

  checkErrors();
});

btnOk.addEventListener("click", (e) => {
  e.preventDefault();

  popup.classList.remove("popup-show");

  username.value = "";
  mail.value = "";
  txtArea.value = "";
});
