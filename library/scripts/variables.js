const titleDropMenu = document.querySelector('.title-menu');
const btnLogInDropMenu = document.querySelector('.log-in');
const userFirstName = document.querySelector('.first-name');
const userLastName = document.querySelector('.last-name');
const initials = document.querySelector('.initials');
const bonusesCount = document.querySelector('.bonuses-number');
const visitsCount = document.querySelector('.visits-number');
const booksCount = document.querySelector('.books-number');
const btnSignUpCards = document.querySelector('.sign-up-btn');
const btnSignUp = document.querySelector('.sign-up-btn-modal');

const userCardNumber = document.querySelector('.card-number-user');
const btnsWrapper = document.querySelector('.btns-wrapper');
const btnMyProfile = document.createElement('button');
const btnLogOut = document.createElement('button');
const btnCloseUserProfile = document.querySelector('.btn-close-modal-user-profile');
const modalUserProfile = document.querySelector('.wrapper-modal-user-profile');
const btnLogIn = document.querySelector('.log-in');
const btnLogInCards = document.querySelector('.log-in-btn');
const btnProfileCard = document.querySelector('.profile-btn');
const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
const inputEmailCardLogIn = document.getElementById('log-in-email-card');
const inputPasswordLogIn = document.getElementById('log-in-password');
const btnCloseModalBuycard = document.querySelector('.btn-close-modal-buy-library-card');

const body = document.querySelector('body');
const booksList = document.querySelector('.books-list');

const cardNumberInput = document.getElementById('card-number');
const expirationCodeMounth = document.getElementById('expiration-code-mounth');
const expirationCodeYear = document.getElementById('expiration-code-year');
const cardCvc = document.getElementById('card-cvc');

const cardTitle = document.querySelector('.create-card-title');
const cardText = document.querySelector('.create-card-text');
const cardTitleFind = document.querySelector('.find-card-title');

let usersCredits = [];
const setUsersCredits = (value) => usersCredits = value;

let currentUserCreditsLogged = {};
const setCurrentUserCreditsLogged = (credits) => currentUserCreditsLogged = credits;

export {
  visitsCount,
  booksCount,
  btnSignUpCards,
  btnSignUp,
  currentUserCreditsLogged,
  setCurrentUserCreditsLogged,
  usersCredits,
  setUsersCredits,
  titleDropMenu,
  btnLogInDropMenu,
  userFirstName,
  userLastName,
  initials,
  bonusesCount,
  userCardNumber,
  btnsWrapper,
  btnMyProfile,
  btnLogOut,
  btnCloseUserProfile,
  modalUserProfile,
  btnLogIn,
  btnLogInCards,
  btnProfileCard,
  btnCloseModalLogIn,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  btnCloseModalBuycard,
  body,
  booksList,
  cardNumberInput,
  expirationCodeMounth,
  expirationCodeYear,
  cardCvc,
  cardTitle,
  cardText,
  cardTitleFind,
};