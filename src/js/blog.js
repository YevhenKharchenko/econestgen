import Swiper from 'swiper';
import 'swiper/css/bundle';

const blogLeftArrow = document.getElementById('blogLeftArrow');
const blogRightArrow = document.getElementById('blogRightArrow');

let blogSwiper;

blogSwiper = new Swiper('.blog-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 80,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.blog-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateBlogArrows(this);
    },
  },
});

updateBlogArrows(blogSwiper);

function updateBlogArrows(swiper) {
  blogLeftArrow.disabled = swiper.isBeginning;
  blogRightArrow.disabled = swiper.isEnd;
}

blogLeftArrow.addEventListener('click', () => {
  blogSwiper.slidePrev();
});

blogRightArrow.addEventListener('click', () => {
  blogSwiper.slideNext();
});
