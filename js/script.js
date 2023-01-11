$(document).ready(function () {
  // banner
  var swiper = new Swiper(".first", {
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // gift-list
  var swiper = new Swiper(".second", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
  });

  var swiper = new Swiper(".thirdSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  });

  // var swiper = new Swiper(".forthSwiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   slidesPerGroup: 1,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  // });

  //   var swiper = new Swiper(".mySwiper", {
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
});
