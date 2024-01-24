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

  AOS.init();
});

function FloatingWrap() {
  var floatingWrap = document.querySelector(".floating-wrap");
  floatingWrap.style.display = "none";
}

// 마우스 오버시 색변경
document.addEventListener("DOMContentLoaded", function () {
  var titleContactLink = document.querySelector(".title-contact a");

  titleContactLink.addEventListener("mouseover", function () {
    this.style.color = "#ff592e";
  });
});

// depth2 영역 안에 있을 때 유지, 영역 밖으로 나가면 사라지는 효과 추가.
document.addEventListener("DOMContentLoaded", function () {
  const gnbTitles = document.querySelectorAll(".gnb-title");
  const depth2Menus = document.querySelectorAll(".depth2");
  const headerGnbBg = document.querySelector(".header-gnb-bg");

  gnbTitles.forEach((title) => {
    title.addEventListener("mouseover", function () {
      depth2Menus.forEach((depth2) => {
        depth2.style.display = "block";
      });
      headerGnbBg.style.display = "block";
    });

    title.addEventListener("mouseout", function (e) {
      // Check if the mouse is outside the depth2 area
      if (!e.relatedTarget || !e.relatedTarget.closest(".depth2")) {
        depth2Menus.forEach((depth2) => {
          depth2.style.display = "none";
        });
        headerGnbBg.style.display = "none";
      }
    });
  });

  // Close depth2 if the mouse leaves the depth2 area
  headerGnbBg.addEventListener("mouseout", function (e) {
    if (!e.relatedTarget || !e.relatedTarget.closest(".depth2")) {
      depth2Menus.forEach((depth2) => {
        depth2.style.display = "none";
      });
      headerGnbBg.style.display = "none";
    }
  });
});

// AOS 애니메이션
