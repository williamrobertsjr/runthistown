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