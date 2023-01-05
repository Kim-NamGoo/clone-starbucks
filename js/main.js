// banner JS //
const fadeEls = document.querySelectorAll(".banner-title .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// notice-line swiper//

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// promotion swiper//

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// toggle promotion //
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

function clickToggleBtn() {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion == true) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
}

promotionToggleBtn.addEventListener("click", clickToggleBtn);

// find-store scroll magic //

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// awards JS //

new Swiper(".awards .swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//  footer JS //

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

const upperBtn = document.querySelector(".upper-btn");

function showBtn() {
  if (window.scrollY > 500) {
    upperBtn.classList.add("upper-show");
  } else {
    upperBtn.classList.remove("upper-show");
  }
}

window.addEventListener("scroll", _.throttle(showBtn, 300));
upperBtn.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
