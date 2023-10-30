import { getLocalStorageUsersCredits, localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";

import {
  cardTitle,
  cardText,
  btnProfileCard,
  btnLogInCards,
  cardTitleFind,
  btnSignUpCards,
} from "../variables.js";

import {
  checkVisitsCount,
  checkBooksCount,
  checkBonusesCount,
  findLibraryCard,
  checkDetails,
  readersName,
  readersCardNumber,
} from "../forms/variables.js";

export const changeUserCard = () => {
  getLocalStorageUsersCredits(getRegisteredUsers());
  localStorageUsersCredits.forEach(user => {
    if (user.logged) {
      checkVisitsCount.textContent = `${user.visits}`;
      checkBooksCount.textContent = `${user.books}`;
      checkBonusesCount.textContent = `${user.bonuses}`;
      findLibraryCard.style.display = 'none';
      checkDetails.style.display = 'flex';
      readersName.value = user.firstName + ' ' + user.lastName;
      readersCardNumber.value = user.cardNumber;
      readersName.setAttribute('disabled', '');
      readersCardNumber.setAttribute('disabled', '');
      readersName.style.color = '#BB945F';
      readersCardNumber.style.color = '#BB945F';
      cardTitle.textContent = 'Visit your profile';
      cardText.textContent = `With a digital library card you get free access
                              to the Library’s wide array of digital resources
                              including e-books, databases, educational resources,
                              and more.`;
      btnProfileCard.style.display = 'block';
      btnLogInCards.style.display = 'none';
      btnSignUpCards.style.display = 'none';
      cardTitleFind.textContent = 'Your Library card';
    };
  });
};