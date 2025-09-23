const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// script.js

window.addEventListener("scroll", () => {
  const aboutBox = document.querySelector(".about-box");
  const triggerBottom = window.innerHeight * 0.85;
  const boxTop = aboutBox.getBoundingClientRect().top;

  if (boxTop < triggerBottom) {
    aboutBox.classList.add("visible");
  }
});
