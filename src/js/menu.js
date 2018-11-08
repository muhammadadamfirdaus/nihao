const createTagDiv = document.createElement('div');
const createTagA = document.createElement('a');
const createTagSpan = document.createElement('span');

// create extra button for menu
const menu = document.querySelector('.menu');
createTagDiv.className = 'menu-mobile';
const extraButton = menu.before(createTagDiv); // place before .menu
const menuButton =
// extraButton.appendChild(createTagA);
createTagDiv.appendChild(createTagSpan);

// menu mobile button
const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', () => {
  // check if menu has class active before then show menu
  if(menuMobile.classList.contains('close')){
    menuMobile.classList.remove('close');
    menu.classList.remove('active');
  } else {
    menuMobile.classList.add('close');
    menu.classList.add('active');
  }

  // window.addEventListener('click', (e) => {
  //   e.stopImmediatePropagation();
  //   // check if user click outside menu area
  //   if((menu != e.target) && (menuMobile != e.target)){
  //     menuMobile.classList.remove('close');
  //     menu.classList.remove('active');
  //     console.log('hi');
  //   }
  // });
});
// end menu mobile


// submenu
const submenu = document.querySelectorAll('.menu .sub');
for(let i = 0; i < submenu.length; i++){
  submenu[i].addEventListener('mouseover', function(e){
    e.preventDefault();
    this.classList.add('active');
  });
  submenu[i].addEventListener('mouseout', function(e){
    e.preventDefault();
    if(submenu[i].classList.contains('active')){
      submenu[i].classList.remove('active');
    } else {
      submenu[i].classList.remove('active');
    }
  });
}
// end submenu

let resize = false;
window.addEventListener('resize', function(){
  resize = true;
});

setInterval(function(){
  if(resize){
    resize = false;
    // begin resize
    if(screenWidth > 800){
      console.log('desktop');
    } else {
      console.log('mobile');
    }
  }
}, 0);