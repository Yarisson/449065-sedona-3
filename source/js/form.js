'use strict';

(function () {
  var popupFailure = document.querySelector('.popup-failure');
  var popupSucces = document.querySelector('.popup-succes');
  var failureHidden = document.querySelector('.popup-failure--hidden');
  var succesHidden = document.querySelector('.popup-succes--hidden');
  var formButton = document.querySelector('.button-form__button');
  var succesButton = document.querySelector('.popup-succes__button');
  var failureButton = document.querySelector('.popup-failure__button');
  var inputTelephon = document.querySelector('#tel');
  var inputEmail = document.querySelector('#email');
  var inputName = document.querySelector('#name');
  var inputLastName = document.querySelector('#last-name');

  var onButtonFormClick = function () {
    if (!inputTelephon.value || !inputEmail.value || !inputName.value || inputLastName.value) {
      popupFailure.classList.remove("popup-failure--hidden");
      failureButton.addEventListener('click', onButtonFailureClick);
      console.log("Заполните поля формы");
    } else {
      popupSucces.classList.remove("popup-succes--hidden");
      succesButton.addEventListener('click', onButtonSuccesClick);
    }
  }

  var onButtonFailureClick = function () {
    popupFailure.classList.add("popup-failure--hidden");
    failureButton.removeEventListener('click', onButtonFailureClick);
  }

  var onButtonSuccesClick = function () {
    popupSucces.classList.add("popup-succes--hidden");
    succesButton.removeEventListener('click', onButtonSuccesClick);
  }

  formButton.addEventListener('click', onButtonFormClick);
})();
