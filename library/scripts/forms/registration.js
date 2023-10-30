import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { resetColorBorderInput } from "../helpers.js";
import { changeProfileMenu } from "../changeContent/changeProfileMenu.js";
import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { changeBtns } from "../helpers.js";
import { changeCard } from "../changeContent/changeCard.js";
import { generateCardNumber } from "../utils.js";
import { body, btnSignUp } from "../variables.js";
import {
  firstName,
  lastName,
  email,
  password,
  wrapperModalReg,
  formRegistrarion,
} from "./variables.js";

import {
  usersCredits,
  newUserCredits,
  setUserLogged,
  setUserVisits,
  setUserBonuses,
  setUsersCredits,
  setUserCardNumber,
} from "../createNewUser.js";

export const registration = () => {
  const randomCardNumber = generateCardNumber();
  const randomBonuses = Math.floor(Math.random() * 1000);
  setUserCardNumber(randomCardNumber);
  setUserLogged();
  setUserVisits();
  setUserBonuses(randomBonuses);
  setUsersCredits([...localStorageUsersCredits, newUserCredits]);
  localStorage.setItem('usersCredits', JSON.stringify(usersCredits));
  formRegistrarion.reset();
  resetColorBorderInput(firstName, lastName, email, password);
  setTimeout(() => {
    wrapperModalReg.classList.remove('active-blackout');
    body.classList.remove('no-scroll');
    btnSignUp.style.background = '';
    btnSignUp.textContent = 'Sign Up!';
  }, 1000);
  changeProfileMenu(getRegisteredUsers());
  btnSignUp.style.background = '#32CD32';
  btnSignUp.textContent = 'Welcome!';
  changeBtns();
  changeCard();
};