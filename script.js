"use strict";

// selecting the elements we need:
const menuImage = document.querySelector(".humberger-menu-img");
const mobileNav = document.querySelector(".mobile-nav");

//adding the click event handler :
menuImage.addEventListener("click", function (e) {
  e.preventDefault();
  //   changing the icon for hamburger menu
  e.target.classList.toggle("close-menu");
  //   show and hide the mobile menu:
  mobileNav.classList.toggle("show-mobile-nav");
});
