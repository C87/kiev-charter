'use strict';

// On scroll fix navigation bar
document.addEventListener('scroll', function () {
  var banner = document.getElementsByClassName('nav')[0];

  if (window.scrollY === 0) {
    banner.style.position = '';
  } else {
    banner.style.position = 'fixed';
    banner.style.top = 0;
  }
});
//# sourceMappingURL=index.js.map