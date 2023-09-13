const body = document.body;
const hamburgerMenu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  body.dataset.mobileMenu =
    body.dataset.mobileMenu === "opened" ? "closed" : "opened";
  document.documentElement.style.overflowY =
    body.dataset.state === "opened" ? "hidden" : "auto";
});
