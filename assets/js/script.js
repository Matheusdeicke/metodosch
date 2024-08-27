'use strict';
/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Carrossel modulos e bonus

document.addEventListener("DOMContentLoaded", function () {
  function duplicateCards(container) {
      const cards = container.children;
      const totalWidth = Array.from(cards).reduce((acc, card) => acc + card.offsetWidth + 20, 0);
      const containerWidth = container.offsetWidth;
      const cardsToDuplicate = Math.ceil(containerWidth / totalWidth) + 1;
      
      for (let i = 0; i < cardsToDuplicate; i++) {
          Array.from(cards).forEach(card => {
              container.appendChild(card.cloneNode(true));
          });
      }
  }

  function startInfiniteScroll(container, speed, direction = 1) {
      let scrollPosition = 0;
      function scroll() {
          scrollPosition += speed * direction;
          if (direction === 1 && scrollPosition >= container.scrollWidth / 2) {
              scrollPosition = 0;
          } else if (direction === -1 && scrollPosition <= 0) {
              scrollPosition = container.scrollWidth / 2;
          }
          container.style.transform = `translateX(${-scrollPosition}px)`;
          requestAnimationFrame(scroll);
      }
      scroll();
  }

  const row1 = document.querySelector('.row1');
  const row2 = document.querySelector('.row2');

  duplicateCards(row1);
  duplicateCards(row2);

  startInfiniteScroll(row1, 0.3, 1); // Movimento da esquerda para direita
  startInfiniteScroll(row2, 0.3, -1); // Movimento da direita para esquerda
});







/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

// script.js
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const images = carousel.innerHTML; // Armazena as imagens originais
  carousel.innerHTML += images; // Duplica as imagens para um efeito contínuo
});


