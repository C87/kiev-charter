// On scroll fix navigation bar
document.addEventListener('scroll', () => {
  const banner = document.getElementsByClassName('nav')[0];

  if (window.scrollY === 0) {
    banner.style.position = '';
  } else {
    banner.style.position = 'fixed';
    banner.style.top = 0;
  }
});
