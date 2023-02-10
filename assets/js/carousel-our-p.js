const $swiper = $(".swiper-mod");

      const swiper = new Swiper(".swiper-mod", {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        centeredSlides: true,
        grabCursor: true,
        centeredSlidesBounds: true,
        allowTouchMove: true,
        touchReleaseOnEdges: true,
        loop: true,
        loopedSlides: 2,
        //  effect:"cards",
        // mousewheel: true,
        // simulateTouch: true,
        // autoHeight: true,

        // loopFillGroupWithBlank: true,
        // mousewheel: {
        //   invert: true,
        // },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 120,
          },
          // when window width is >= 480px
          580: {
            slidesPerView: 3,
            spaceBetween: 120,
            navigation: {
              nextEl: ".swiper-button-next-mod",
              prevEl: ".swiper-button-prev-mod",
            },
          },
          1270: {
            slidesPerView: 3,
            spaceBetween: null,
            navigation: {
              nextEl: ".swiper-button-next-mod",
              prevEl: ".swiper-button-prev-mod",
            },
          },
          // when window width is >= 640px
          // 640: {
          //   slidesPerView: 4,
          //   spaceBetween: 40
          // }
        },
      });