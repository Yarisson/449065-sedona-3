'use strict';

(function () {
  var headerButton = document.querySelector('.page-header__button');
  var mainNav = document.querySelector('.main-nav');

  var onHeaderButtonClick = function (evt) {
    evt.preventDefault();
    if (headerButton.classList.contains('page-header__button--toggler')) {
      mainNav.classList.remove('main-nav--hidden');
      headerButton.classList.remove('page-header__button--toggler');
      headerButton.classList.add('page-header__button--cross');
    }
    else {
      mainNav.classList.add('main-nav--hidden');
      headerButton.classList.remove('page-header__button--cross');
      headerButton.classList.add('page-header__button--toggler');
    }
  }

  headerButton.addEventListener('click', onHeaderButtonClick);
})();
