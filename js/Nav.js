const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");
navBtn.addEventListener("click", () => {
  console.log(navLinks);
  navLinks.classList.toggle("show-links");
});
