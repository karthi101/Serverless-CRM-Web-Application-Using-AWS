const BASE_URL = "https://Replace with your actual API Gateway Invoke URL.amazonaws.com/kk";

document.addEventListener("DOMContentLoaded", () => {

  // Register user
  const regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      alert(data.message || "Error");
      if (res.status === 200) window.location.href = "login.html";
    });
  }

  // Login user
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.status === 200 && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        window.location.href = "home.html";
      } else {
        alert(data.message || "Login failed");
      }
    });
  }

  // Home page logic
  const userInfo = document.getElementById("userInfo");
  if (userInfo) {
    const email = localStorage.getItem("email");
    userInfo.textContent = `Logged in as: ${email}`;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "login.html";
    });
  }
});

