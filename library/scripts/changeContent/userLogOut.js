import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { changeProfileMenu } from "./changeProfileMenu.js";
import {
  btnLogOut,
  btnMyProfile,
  btnsWrapper,
  titleDropMenu,
  cardTitle,
  cardText,
  btnProfileCard,
  btnLogInCards,
  cardTitleFind,
  btnLogInDropMenu,
  btnSignUpCards,
} from "../variables.js";

import { buyBtns } from "../buyBook/variables.js";

import {
  formCard,
  findLibraryCard,
  checkDetails,
  readersName,
  readersCardNumber,
} from "../forms/variables.js";

import { btnRegister } from "../modals/variables.js";

export const userLogOut = () => {
  localStorageUsersCredits.map(user => {
    if (user.logged) {
      user.logged = false;
      localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
      changeProfileMenu(localStorageUsersCredits.logged);
      btnLogOut.remove();
      btnMyProfile.remove();
      btnsWrapper.appendChild(btnLogInDropMenu);
      btnsWrapper.appendChild(btnRegister);
      titleDropMenu.textContent = 'Profile';
      buyBtns.forEach(buy => {
          buy.classList.remove('book-own')
          buy.classList.add('book-buy');
          buy.textContent = 'Buy';
          buy.removeAttribute('disabled');
      });
    };
  });
  formCard.reset();
  findLibraryCard.style.display = 'block';
  checkDetails.style.display = 'none';
  readersName.removeAttribute('disabled')
  readersCardNumber.removeAttribute('disabled')
  readersName.style.color = '#BB945F';
  readersCardNumber.style.color = '#BB945F';
  cardTitle.textContent = 'Get a reader card';
  cardText.textContent = `You will be able to see a reader card after logging
                          into account or you can register a new account`;
  btnProfileCard.style.display = 'none';
  btnLogInCards.style.display = 'block';
  btnSignUpCards.style.display = 'block';
  cardTitleFind.textContent = 'Find your Library card';
};