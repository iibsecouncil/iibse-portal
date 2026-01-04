function getValue(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], CONTENT);
}

document.querySelectorAll("[data-content]").forEach(el => {
  const value = getValue(el.dataset.content);
  if (value) el.innerText = value;
});

/* Skills */
const skillsWrap = document.getElementById("skills-list");
if (skillsWrap) {
  CONTENT.skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = skill;
    skillsWrap.appendChild(div);
  });
}

/* Testimonials */
const testiWrap = document.getElementById("testimonials");
if (testiWrap) {
  CONTENT.testimonials.forEach(t => {
    const card = `
      <div class="testimonial-card">
        <div class="testimonial-image">
          <img src="${t.image}">
        </div>
        <div class="testimonial-content">
          <h3 class="school-name">${t.school}</h3>
          <p class="school-location">${t.location}</p>
          <p class="testimonial-text">“${t.text}”</p>
        </div>
      </div>`;
    testiWrap.insertAdjacentHTML("beforeend", card);
  });
}
