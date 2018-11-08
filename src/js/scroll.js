// check if element in viewport
let elementInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// get current scroll
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

// firing scroll event
let scrolling = false;
window.addEventListener('scroll', function(){
  scrolling = true;
});

setInterval(function(){
  if (scrolling) {
    scrolling = false;
    // begin scroll
    // sticky header
    let header = document.querySelector('header');
    let scroll = getCurrentScroll();
    if(screenWidth > 800){
      console.log('desktop');
      // sticky only on desktop
      if (scroll > header.offsetTop) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    } else {
      console.log('mobile');
    }
  }
}, 250);