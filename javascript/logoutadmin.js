document.addEventListener("DOMContentLoaded", () => {
  const profileIconDiv = document.getElementById("profile-icon");
  const rememberedUsername = localStorage.getItem("rememberedUsername");

  if (rememberedUsername) {
    // User is logged in, show welcome message and logout option
    profileIconDiv.innerHTML = `
        <div class="profile-menu">
          <span>Welcome, ${rememberedUsername}</span>
          <a href="#" id="logout" class="logout-btn">Logout</a>
        </div>
      `;

    document.getElementById("logout").addEventListener("click", (event) => {
      event.preventDefault();
      // Clear localStorage
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");

      // Optionally, clear session storage to prevent automatic login
      sessionStorage.removeItem("isLoggedIn");

      // Redirect to index.html after logout
      window.location.href = "../index.html";
    });
  } else {
    // User is not logged in, show login link
    profileIconDiv.innerHTML = `
        <a href="../login/loginadmin.html">
          <img src="../gambar/login.png" alt="Profile" />
        </a>
      `;
  }
});
