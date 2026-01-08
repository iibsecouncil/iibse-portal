document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const response = await fetch(
        "https://iibse-backend-ev2r.onrender.com/api/send-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Password sent to your email. Please check inbox/spam.");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    }
  });
});
