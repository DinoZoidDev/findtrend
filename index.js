const body = document.body;
const hamburgerMenu = document.getElementById("menu");
const mobileWrapper = document.getElementById("mobile-wrapper");
const buttons = document.getElementsByTagName("button");

const updateDialogState = () => {
  body.dataset.mobileMenu =
    body.dataset.mobileMenu === "opened" ? "closed" : "opened";
};

hamburgerMenu.addEventListener("click", updateDialogState);
for (let i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener("click", updateDialogState);
}

body.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" && body.dataset.mobileMenu === "opened")
    body.dataset.mobileMenu = "closed";
});
