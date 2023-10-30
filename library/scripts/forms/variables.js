const btnBuyCard = document.querySelector('.buy-card-btn');
const modalBuyCard = document.querySelector('.wrapper-modal-buy-library-card');
const formCard = document.getElementById('form-card');
const findLibraryCard = document.querySelector('.check-card');
const checkDetails = document.querySelector('.check-details');
const readersName = document.getElementById('readers-name');
const readersCardNumber = document.getElementById('readers-card-number');
const checkVisitsCount = document.querySelector('.check-visits-number');
const checkBooksCount = document.querySelector('.check-books-number');
const checkBonusesCount = document.querySelector('.check-bonuses-number');
const inputEmailCardLogIn = document.getElementById('log-in-email-card');
const inputPasswordLogIn = document.getElementById('log-in-password');
const btnLogInModal = document.querySelector('.log-in-btn-modal');
const formLogIn = document.getElementById('form-log-in');
const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');
const formCardDetails = document.getElementById('form-card-details');
const formRegistrarion = document.getElementById('form-registration');
const wrapperModalReg = document.querySelector('.wrapper-modal-register');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const body = document.querySelector('body');

let checkCardCredits = {};

let inputEmailCardLogInValue;
let inputPasswordLogInValue;
let inputReadersNameValue;
let inputReadersCardNumberValue;

const setInputEmailCardLogInValue = (value) => inputEmailCardLogInValue = value;
const setInputPasswordLogInValue = (value) => inputPasswordLogInValue = value;
const setInputReadersNameValue = (value) => inputReadersNameValue = value;
const setInputReadersCardNumberValue = (value) => inputReadersCardNumberValue = value;
const setCheckCardCredits = (value) => checkCardCredits = value;

export {
  body,
  firstName,
  lastName,
  email,
  password,
  wrapperModalReg,
  btnBuyCard,
  modalBuyCard,
  formCard,
  formRegistrarion,
  checkCardCredits,
  findLibraryCard,
  checkDetails,
  readersName,
  readersCardNumber,
  checkVisitsCount,
  checkBooksCount,
  checkBonusesCount,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  btnLogInModal,
  formLogIn,
  wrapperModalLogIn,
  formCardDetails,
  inputEmailCardLogInValue,
  setInputEmailCardLogInValue,
  inputPasswordLogInValue,
  setInputPasswordLogInValue,
  inputReadersNameValue,
  setInputReadersNameValue,
  inputReadersCardNumberValue,
  setInputReadersCardNumberValue,
  setCheckCardCredits
};
