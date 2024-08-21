document.addEventListener("DOMContentLoaded", () => {
  const username = "sepuhkoding";
  const password = "Admin#1234";

  const loginButton = document.getElementById("submit");
  const usernameField = document.querySelector(".input-field[type='text']");
  const passwordField = document.querySelector(".input-field[type='password']");
  const rememberMeCheckbox = document.getElementById("check");
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-msg");
  document.querySelector(".login-box").appendChild(errorMsg);

  // Check if user is remembered
  if (
    localStorage.getItem("rememberedUsername") &&
    localStorage.getItem("rememberedPassword")
  ) {
    usernameField.value = localStorage.getItem("rememberedUsername");
    passwordField.value = localStorage.getItem("rememberedPassword");
    rememberMeCheckbox.checked = true;
  }

  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;

    if (enteredUsername === username && enteredPassword === password) {
      if (rememberMeCheckbox.checked) {
        localStorage.setItem("rememberedUsername", enteredUsername);
        localStorage.setItem("rememberedPassword", enteredPassword);
      } else {
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
      }

      // Set session storage to indicate successful login
      sessionStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      // Redirect to index1.html after successful login
      window.location.href = "../halaman_masuk/index1.html";
    } else {
      // Display error message if login credentials are incorrect
      errorMsg.textContent = "Invalid username or password.";
      errorMsg.style.color = "red";
    }
  });

  // Prevent back navigation to the login page if logged in
  if (sessionStorage.getItem("isLoggedIn")) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});
