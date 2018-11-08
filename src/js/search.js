
if(screenWidth < 800){
  // click on search icon and show search form
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    search.classList.contains('active') ? search.classList.remove('active') : search.classList.add('active');
  });
}