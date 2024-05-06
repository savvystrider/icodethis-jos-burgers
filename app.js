const toggleBtn = document.querySelector("#toggle-btn");
const menu = document.querySelector(".main-nav ul");

toggleBtn.addEventListener("click", function () {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    this.setAttribute("aria-expanded", false);
    document
      .querySelector(".menu-btn img")
      .setAttribute("src", "./images/menu-btn.svg");
  } else {
    menu.classList.add("active");
    this.setAttribute("aria-expanded", true);
    document
      .querySelector(".menu-btn img")
      .setAttribute("src", "./images/close-btn.svg");
  }
});
