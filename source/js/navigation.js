'use strict';

(function () {
  var headerButton = document.querySelector('.page-header__button');
  var buttonToggler = document.querySelector('.page-header__button--toggler');
  var buttonCross = document.querySelector('.page-header__button--cross');
  var mainNav = document.querySelector('.main-nav');

  var onButtonTogglerClick = function (evt) {
    evt.preventDefault();
    mainNav.style.display = 'block';
    headerButton.style.display = 'none';
    buttonToggler.style.display = 'none';
    buttonToggler.removeEventListener('click', onButtonTogglerClick);
    buttonCross.style.display = 'block';
    buttonCross.addEventListener('click', onButtonCrossClick);
  }

  var onButtonCrossClick = function (evt) {
    evt.preventDefault();
    mainNav.style.display = 'none';
    headerButton.style.display = 'none';
    buttonCross.style.display = 'none';
    buttonCross.removeEventListener('click', onButtonCrossClick);
    buttonToggler.style.display = 'block';
    buttonToggler.addEventListener('click', onButtonTogglerClick);
  }

  buttonToggler.addEventListener('click', onButtonTogglerClick);
  buttonCross.addEventListener('click', onButtonCrossClick);
})();
