// swiper init for headline
const homeHeadline = new Swiper('.swiper-container.headline', {
  init: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const homeHeadlineDescription = new Swiper('.swiper-container.description', {
  init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// recommendation 1
const type1 = new Swiper('.swiper-container.type-1', {
  init: false,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  // spaceBetween: 8,
  breakpoints: {
    1920: {
      slidesPerColumn: 2,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1440: {
      slidesPerColumn: 2,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1280: {
      slidesPerColumn: 2,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    640: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    320: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 8,
    }
  }
});

const type2 = new Swiper('.swiper-container.type-2', {
  init: false,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  // spaceBetween: 8,
  breakpoints: {
    1920: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1440: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1280: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    640: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 8,
    },
    320: {
      slidesPerColumn: 3,
      slidesPerView: 'auto',
      spaceBetween: 8,
    }
  }
});

const type3a = new Swiper('.swiper-container.type-3.picture', {
  init: false,
  slidesPerView: 'auto',
  slidesPerColumn: 1,
  slidesPerColumnFill: 'row',
  spaceBetween: 8
});

const type3b = new Swiper('.swiper-container.type-3.caption', {
  init: false,
  slidesPerView: 'auto',
  slidesPerColumn: 1,
  slidesPerColumnFill: 'row',
  pagination: {
    el: '.caption .swiper-pagination',
    clickable: true
  }
});

const timelineEvent = new Swiper('.swiper-container.timeline', {
  init: false,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
  breakpoints: {
    1280: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    640: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    320: {
      slidesPerColumn: 1,
      slidesPerView: 'auto',
      spaceBetween: 8,
    }
  }
  
});


const homePage = document.getElementById('home');
if(homePage){
  homeHeadline.init();
  homeHeadlineDescription.init();
  type1.init();
  type2.init();
  type3a.init();
  type3b.init();
  homeHeadline.controller.control = homeHeadlineDescription
  homeHeadlineDescription.controller.control = homeHeadline
  type3a.controller.control = type3b
  type3b.controller.control = type3a
  if(screenWidth > 800){
    // recommendationType1.destroy();
  } else {
    console.log('mobile');
  }
}

const eventPage = document.querySelector('.event');
if(eventPage){
  timelineEvent.init();
  
  if(screenWidth > 800){
    // recommendationType1.destroy();
    type1.init();
  } else {
    type1.params.direction = 'vertical',
    type1.params.slidesPerView = 1,
    type1.params.updateOnImagesReady = true,
    type1.params.spaceBetween = 40
    type1.init();
  }
}