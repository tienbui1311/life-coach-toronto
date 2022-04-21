// DROPDOWN MENUS
function menuOneShow() {
  document.getElementById("coaching").classList.toggle("show");
  document.getElementById("services").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuTwoShow() {
  document.getElementById("services").classList.toggle("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuThreeShow() {
  document.getElementById("contact").classList.toggle("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
}
function menuHide() {
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuFourShow() {
  document.getElementById("contact").classList.remove("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
}

document
  .getElementById("coaching-btn")
  .addEventListener("mouseenter", menuOneShow);

document
  .getElementById("services-btn")
  .addEventListener("mouseover", menuTwoShow);

document
  .getElementById("contact-btn")
  .addEventListener("mouseover", menuThreeShow);

document.getElementById("about-me").addEventListener("mouseover", menuFourShow);

document.getElementById("coaching").addEventListener("mouseleave", menuHide);
document.getElementById("services").addEventListener("mouseleave", menuHide);
document.getElementById("contact").addEventListener("mouseleave", menuHide);

// Side menu
function sideMenuAppears() {
  document.getElementById("side-menu").classList.add("show-menu");
  document.getElementById("side-menu-content").classList.add("show-menu");
}
function sideMenuDisappears() {
  document.getElementById("side-menu").classList.remove("show-menu");
  document.getElementById("side-menu-content").classList.remove("show-menu");
}
document
  .getElementById("menu-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("menu-close")
  .addEventListener("click", sideMenuDisappears);

// HH email signup Modal
// Using Bootstrap css, js and jQuery to open modal on Page Load
$(document).ready(function () {
  // after 3 mins at the site, join email list modal pops up
  setTimeout(() => {
    $("#email-list").modal("show");
  }, 20000);
});

// Sign up Modal
const signUp = document.getElementById("signup-in-modal");
const openSignUp = document.querySelector(".signup-btn");
const closeSignup = document.querySelector(".close-btn");
// Click events for Sign Up Modal
openSignUp.addEventListener("click", () => {
  signUp.style.display = "block";
});
closeSignup.addEventListener("click", () => {
  signUp.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === signUp) {
    signUp.style.display = "none";
  }
});
//Form Validation
const form = document.getElementById("signup-in-modal-form");
const clientName = document.getElementById("name");
const email = document.getElementById("account-email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
//Show error message
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation error";

  const errorMessage = formValidation.querySelector("p");
  errorMessage.innerText = message;
}
// Show Valid message
function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form-validation valid";
}
// Check Required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  });
}
// Check Passwords match
function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get Field's names
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showValid(input);
  }
}
// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([clientName, email, password, passwordConfirm]);
  checkLength(clientName, 2, 30);
  checkLength(password, 8, 25);
  checkLength(passwordConfirm, 8, 25);
  passwordMatch(password, passwordConfirm);
});
