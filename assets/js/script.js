'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// MOBILE NAV
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');


const togglerNav = function () {
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
}

addEventOnElements(navTogglers, 'click', togglerNav);

const closeNav = function () {
  navbar.classList.remove('active')
  overlay.classList.remove('active')
}

addEventOnElements(navLinks, 'click', closeNav);




// HEADER and back-top-button
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]')

window.addEventListener('scroll', function () {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");

  backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})


