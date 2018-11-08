const detailArticle = document.getElementsByClassName('detail-article');
if(detailArticle.length){
  const captionPhotoButton = document.querySelectorAll('.caption');
  const captionPhoto = document.querySelectorAll('figcaption');
  for(let i = 0; i < captionPhotoButton.length; i++){
    captionPhotoButton[i].addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      console.log('detail article');
      
      // remove this loop for stay awake all the night!
      for(let j = 0; j < captionPhoto.length; j++){
        captionPhoto[j].classList.remove('active');
      }
      // captionPhoto[i].classList.toggle('active');
      if(captionPhoto[i].classList.contains('active')){
        captionPhoto[i].classList.remove('active');
      } else {
        captionPhoto[i].classList.add('active');
      }
      // check if active active already exists
      // captionPhoto[i].classList.contains('active') ? captionPhoto[i].classList.remove('active') : captionPhoto[i].classList.add('active');
    });
  }
}