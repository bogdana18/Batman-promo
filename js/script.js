const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active');
})

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active');
})

try {
  const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
  });

  sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
  })

  const sliderMain = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
  });

  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;
} catch {
  console.log('На этой странице нет слайдера')
}