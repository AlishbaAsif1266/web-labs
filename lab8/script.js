const nameinput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const msgInput = document.getElementById("msg");
const dobInput = document.getElementById("dob");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const msgError = document.getElementById("msgError");
const dobError = document.getElementById("dobError");

nameinput.addEventListener("input", () => {
  if (nameinput.value.trim().length < 5) {
    nameError.textContent = "Name must be atleast 5 characters";
    nameError.className = "error red";
  } else {
    nameError.textContent = "";
  }
});

emailInput.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    emailError.className = "error red";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const pass = passwordInput.value;

  if (pass.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordError.className = "error red";
  } 
  else if (!/[0-9]/.test(pass)) {
    passwordError.textContent = "Password must include a number";
    passwordError.className = "error red";
  }
  else {
    passwordError.textContent = "";
  }
});

msgInput.addEventListener("input", () => {
  if (msgInput.value.trim().length < 10) {
    msgError.textContent = "Message must be atleast 10 characters";
    msgError.className = "error red";
  } else {
    msgError.textContent = "";
  }
});

dobInput.addEventListener("input", () => {
  const selected = new Date(dobInput.value);
  const today = new Date();
  let age = today.getFullYear() - selected.getFullYear();
  const m = today.getMonth() - selected.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < selected.getDate())) age--;

  if (isNaN(age) || age < 10) {
    dobError.textContent = "Age must be 10+";
    dobError.className = "error red";
  } else {
    dobError.textContent = "";
  }
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  if (nameError.textContent || 
      emailError.textContent || 
      msgError.textContent ||
      dobError.textContent ||
      passwordError.textContent) {
    e.preventDefault();
    alert("Fix validation Error");
  }
});


