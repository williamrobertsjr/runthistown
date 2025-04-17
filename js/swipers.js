const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 2000,
      },
      loop: true,
});


const swiperAttendees = new Swiper('.swiper-attendees', {
// Optional parameters
direction: 'horizontal',
loop: true,
autoplay: {
    delay:4000,
},
slidesPerView: 1,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
    el: '.swiper-scrollbar',
},
});

const tacosSwiper = new Swiper('.img-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      },
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

const signupSwiper = new Swiper('.signup-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    
    autoplay: {
        delay: 1,
        disableOnInteraction: false
      },
      speed: 2000,
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });