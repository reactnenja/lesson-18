const hamburger = document.querySelector(".btn-toogle");
const navLink = document.querySelector(".navbar-responsive");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  navLink.classList.toggle("hide");
});
