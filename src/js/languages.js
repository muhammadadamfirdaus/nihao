languageButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  console.log('hi');
  languages.classList.contains('active') ? (languages.classList.remove('active'), search.classList.remove('active')) : languages.classList.add('active');
});

