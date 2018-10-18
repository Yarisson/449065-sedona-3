'use strict';

(function () {
  var headerButton = document.querySelector('.page-header__button');
  var buttonToggler = document.querySelector('.page-header__button--toggler');
  var buttonCross = document.querySelector('.page-header__button--cross');
  var mainNav = document.querySelector('.main-nav');

  var onButtonTogglerClick = function (evt) {
    evt.preventDefault();
    mainNav.classList.remove('hidden');
    buttonToggler.classList.add('hidden');
    buttonCross.classList.remove('hidden');
    buttonToggler.removeEventListener('click', onButtonTogglerClick);
    buttonCross.addEventListener('click', onButtonCrossClick);
  }

  var onButtonCrossClick = function (evt) {
    evt.preventDefault();
    mainNav.classList.add('hidden');
    buttonCross.classList.add('hidden');
    buttonToggler.classList.remove('hidden');
    buttonCross.removeEventListener('click', onButtonCrossClick);
    buttonToggler.addEventListener('click', onButtonTogglerClick);
  }

  buttonToggler.addEventListener('click', onButtonTogglerClick);
  buttonCross.addEventListener('click', onButtonCrossClick);
})();
