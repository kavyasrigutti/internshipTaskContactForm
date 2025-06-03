const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (!validateEmail(emailField.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  if (messageField.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
