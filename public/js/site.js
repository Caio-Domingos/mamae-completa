var modulosSwiper = new Swiper('.modulos-swiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  on: {
    slideChange: function () {
      //   console.log('slide changed', modulosSwiper.activeIndex);
      const sliderComponent = document.querySelector('#about .modulos-swiper');

      if (modulosSwiper.activeIndex >= 3) {
        console.log('h 350');
        sliderComponent.style.height = '400px';
      } else {
        console.log('h 700');
        sliderComponent.style.height = '650px';
      }
    },
  },
});

var vantagensSwiper = new Swiper('.vantagens-swiper', {
  pagination: {
    el: '.pagination-vantagens',
    dynamicBullets: true,
  },
});

var especialistasSwiper = new Swiper('.especialistas-swiper', {
  pagination: {
    el: '.pagination-especialistas',
    dynamicBullets: true,
  },
});
