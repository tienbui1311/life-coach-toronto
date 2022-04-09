// DROPDOWN MENUS
function menuOneShow() {
  document.getElementById("coaching").classList.toggle("show");
  document.getElementById("services").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuTwoShow() {
  document.getElementById("services").classList.toggle("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuThreeShow() {
  document.getElementById("contact").classList.toggle("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
}
function menuHide() {
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
  document.getElementById("contact").classList.remove("show");
}
function menuFourShow() {
  document.getElementById("contact").classList.remove("show");
  document.getElementById("coaching").classList.remove("show");
  document.getElementById("services").classList.remove("show");
}

document
  .getElementById("coaching-btn")
  .addEventListener("mouseenter", menuOneShow);

document
  .getElementById("services-btn")
  .addEventListener("mouseover", menuTwoShow);

document
  .getElementById("contact-btn")
  .addEventListener("mouseover", menuThreeShow);

document.getElementById("about-me").addEventListener("mouseover", menuFourShow);

document.getElementById("coaching").addEventListener("mouseleave", menuHide);
document.getElementById("services").addEventListener("mouseleave", menuHide);
document.getElementById("contact").addEventListener("mouseleave", menuHide);

// Side menu
function sideMenuAppears() {
  document.getElementById("side-menu").classList.add("show-menu");
  document.getElementById("side-menu-content").classList.add("show-menu");
}
function sideMenuDisappears() {
  document.getElementById("side-menu").classList.remove("show-menu");
  document.getElementById("side-menu-content").classList.remove("show-menu");
}
document
  .getElementById("menu-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("menu-close")
  .addEventListener("click", sideMenuDisappears);
// HH Modal
