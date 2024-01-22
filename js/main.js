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

// const toggleBtn = document.querySelector(".close-icon");
// const float = document.querySelector(".floating-fox");

// toggleBtn.addEventListener("click", function () {
//   float.style.display = "none";
// });
// var closed = document.querySelector(".floating-wrap");

// const floatButton = document.querySelector(".close-icon");
// floatButton.addEventListener("click", function () {
//   window.self.close(closed);
// });

// const body = document.querySelector("floating-wrap");
// const modal = document.querySelector(".close-icon");

// // isOpen 값에 따라 스크롤을 제어하는 함수
// function controlScroll(isOpen) {
//   if (isOpen) {
//     body.style.overflow = "hidden";
//   } else {
//     body.style.overflow = "auto";
//   }
// }

// // 초기 모달 상태 설정
// const isOpen = true;
// controlScroll(isOpen);

// modal.addEventListener("click", function () {
//   modal.style.display = "none";

//   // 모달이 닫힐 때는 스크롤을 다시 활성화
//   controlScroll(false);
// });

// 헤더 메뉴 드롭다운
// const toggleBtn = document.querySelector("#toggle-button");
// const menu = document.querySelector(".popup-menu");

// // 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
// toggleBtn.addEventListener("onclick", () => {
//   menu.classList.toggle("active");
// });
