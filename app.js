const menuToggleElement = document.querySelector(".nav-menu-close");
const navElement = document.querySelector("nav");
const navLinksListElement = document.querySelector(".nav-links-list");
const linksListWidth = navLinksListElement.getBoundingClientRect().width;
const navbarIcon = document.querySelector("#navbar-icon");

window.addEventListener("DOMContentLoaded", e => {
  navElement.style.transform = `translateX(-${linksListWidth}px)`;
});

navbarIcon.addEventListener("click", e => {
  if (navLinksListElement.getBoundingClientRect().left < 0) {
    navElement.style.transform = `translateX(0)`;
  } else {
    navElement.style.transform = `translateX(-${linksListWidth}px)`;
  }
  if (navbarIcon.textContent === "menu") {
    navbarIcon.textContent = "close";
  } else {
    navbarIcon.textContent = "menu";
  }
});
