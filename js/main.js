$(document).ready(function () {
  var banner = new Swiper(".banner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".slider-banner .swiper-pagination",
      clickable: true,
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
      // 10초마다
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var newMenuList = new Swiper(".new-menu-list", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".new-menu-list .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".new-menu-list .swiper-button .swiper-button-next",
      prevEl: ".new-menu-list .swiper-button .swiper-button-prev",
    },
  });
});

function FloatingWrap() {
  var floatingWrap = document.querySelector(".floating-wrap");
  floatingWrap.style.display = "none";
}
