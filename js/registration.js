// grabbing our elements in the DOM
const userName = document.getElementById("username");
const nameHint = document.getElementById("name-hint");
const passHint = document.getElementById("pass-hint");
const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");

// Validate username field starts with a-zA-Z
const validateName = () => {
  let nameValue = userName.value;
  // Regex test below
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z0-9]*? ?[a-zA-Z0-9]*?$/.test(
    nameValue
  );
  return nameIsValid;
};

// validate password is of acceptable input
const validatePassword = () => {
  let passValue = password.value;
  const passIsValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      passValue
    );
  return passIsValid;
};

const validateConfirm = () => {
  let pass1 = password.value;
  let pass2 = confirmPassword.value;
  let validate = pass1 === pass2;
  return validate;
};

form.addEventListener("submit", (event) => {
  if (!validateName()) {
    event.preventDefault();
    nameHint.textContent =
      "Username must start with a letter and contain at least three characters.";
  }

  if (!validatePassword()) {
    event.preventDefault();
    passHint.textContent = "Password is not a valid format.";
  }

  if (!validateConfirm()) {
    event.preventDefault();
    passHint.textContent = "Passwords do not match.";
  }
});
