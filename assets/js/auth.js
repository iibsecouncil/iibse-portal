// IIBSE AUTH MODULE (NO GLOBAL OVERRIDE)
(function () {
  console.log("IIBSE auth module loaded");

  const sendBtn = document.getElementById("sendPasswordBtn");
  const loginBtn = document.getElementById("loginBtn");
  const status = document.getElementById("loginStatus");

  if (!sendBtn || !loginBtn) return;

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
        status.textContent = data.message || "Request failed";
        status.style.color = "red";
      }
    } catch (e) {
      status.textContent = "Server error. Try again later.";
      status.style.color = "red";
    }
  });

  // LOGIN (NEXT PHASE)
  loginBtn.addEventListener("click", () => {
    const pwd = document.getElementById("loginPassword").value.trim();

    if (!pwd) {
      status.textContent = "Please enter password";
      status.style.color = "red";
      return;
    }

    status.textContent =
      "Login verification will be enabled in next phase.";
    status.style.color = "orange";
  });
})();
