import Swiper, {Mousewheel} from 'swiper';

const loopedSlides = 3;

window.addEventListener('DOMContentLoaded', () => {
  
  const swiperContent = document.querySelector('.uncommon-home-header .swiper-wrapper');
  const sliderParent = document.querySelector('.uncommon-home-header'),
        slides = document.querySelectorAll('.uncommon-home-header-slide'),
        navContainer = document.createElement('div');
  
  let imagesLoaded = 0;
  // get all images in swiperContent
  const images = swiperContent.querySelectorAll('img');
  // loop through images and add loaded class when image is loaded
  images.forEach((image) => {
    image.setAttribute('loading', 'eager');
    image.addEventListener('load', () => {
      image.classList.add('loaded');
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        sliderParent.classList.add('loaded');
      }
    })
  })

  swiperContent.innerHTML = swiperContent.innerHTML + swiperContent.innerHTML + swiperContent.innerHTML;

  navContainer.classList.add('uncommon-home-header__nav');
  
  sliderParent.appendChild(navContainer);
  
  const swiper = new Swiper('.swiper', {
    modules: [Mousewheel],
    loop: true,
    loopedSlides: loopedSlides,
    maxBackfaceHiddenSlides: 18,
    direction: "horizontal",
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      eventsTarget: '.swiper-wrapper'
    },
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 600px
      600: {
        slidesPerView: 5,
        spaceBetween: 0
      }
    }
  });

  slides.forEach((slide, index) => {
    const slidetitle = slide.getAttribute('data-title'),
          slideurl = slide.getAttribute('data-url'),
          navItem = document.createElement('a'),
          navItemCorrespondingSlideIndex = slide.getAttribute('data-swiper-slide-index');

    navItem.classList.add('uncommon-home-header__nav-item');
    navItem.setAttribute('href', slideurl);
    navItem.classList.add('uncommon-home-header__nav-item--' + navItemCorrespondingSlideIndex );
    navItem.innerHTML = slidetitle;
    navContainer.appendChild(navItem);

    navItem.addEventListener('mouseenter', () => {
      swiper.loopFix();
      swiper.slideToLoop(navItemCorrespondingSlideIndex);
    })
    slide.addEventListener('click', (e) => {
      if ( slide.classList.contains('swiper-slide-active') ){
        window.location.href=slideurl;
      }
      else if ( slide.classList.contains('swiper-slide-prev') ){
        swiper.slidePrev();
      }
      else if ( slide.classList.contains('swiper-slide-next') ){
        swiper.slideNext();
      }
    })
  })
})