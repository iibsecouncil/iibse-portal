document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Thank you! Your message has been received.";
    status.style.color = "green";

    form.reset();
  });
});

}

