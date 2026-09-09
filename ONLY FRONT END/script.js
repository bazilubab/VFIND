document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("instituteForm");
  const select = document.getElementById("instituteSelect");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!select.value) {
      errorMsg.textContent = "⚠️ Please select an institute!";
      return;
    }

    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "0";
    setTimeout(() => (window.location.href = "login.html"), 800);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Switch between tabs
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  // Demo form submissions
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful (demo)");
    window.location.href = "home.html"; // next page after login
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registration successful (demo)");
    window.location.href = "home.html";
  });
});






