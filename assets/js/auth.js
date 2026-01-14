// IIBSE FRONTEND AUTH MODULE (BROWSER SAFE)
console.log("IIBSE auth module loaded");

document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendPasswordBtn");
  const loginBtn = document.getElementById("loginBtn");
  const status = document.getElementById("loginStatus");

  if (!sendBtn || !status) return;

  // SEND PASSWORD
  sendBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value.trim();

    if (!email) {
      status.textContent = "Please enter email or username";
      status.style.color = "red";
      return;
    }

    status.textContent = "Sending password...";
    status.style.color = "black";

    try {
      const res = await fetch(
        "https://iibse-backend-ev2r.onrender.com/api/send-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }
      );

      const data = await res.json();

      if (data.success) {
        status.textContent =
          "Password sent to your email. Check Inbox / Spam.";
        status.style.color = "green";
      } else {
        status.textContent = data.message || "Email failed";
        status.style.color = "red";
      }
    } catch (err) {
      status.textContent = "Server error. Try again later.";
      status.style.color = "red";
    }
  });

  // LOGIN (NEXT PHASE)
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      status.textContent =
        "Login verification will be enabled in next phase.";
      status.style.color = "orange";
    });
  }
});
