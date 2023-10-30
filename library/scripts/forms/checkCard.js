import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { getLocalStorageUsersCredits, localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import {
  findLibraryCard,
  checkDetails,
  readersName,
  readersCardNumber,
  checkVisitsCount,
  checkBonusesCount,
  checkBooksCount,
  inputReadersNameValue,
  inputReadersCardNumberValue,
  setInputReadersNameValue,
  setInputReadersCardNumberValue,
  setCheckCardCredits
} from "./variables.js";


export const checkCard = () => {
  if (!getRegisteredUsers()) return;
  getLocalStorageUsersCredits(getRegisteredUsers())
  const checkCardCredits = localStorageUsersCredits.find(user => user.firstName === inputReadersNameValue) || {};

  if (!Object.keys(checkCardCredits).length) {
      return alert('User not found.');
  };

  if (checkCardCredits.firstName === inputReadersNameValue && checkCardCredits.cardNumber === inputReadersCardNumberValue) {
      findLibraryCard.style.display = 'none';
      checkDetails.style.display = 'flex';
      readersName.setAttribute('disabled', '');
      readersCardNumber.setAttribute('disabled', '');
      checkVisitsCount.textContent = `${checkCardCredits.visits}`;
      checkBooksCount.textContent = `${checkCardCredits.books}`;
      checkBonusesCount.textContent = `${checkCardCredits.bonuses}`;
      setTimeout(() => {
          findLibraryCard.style.display = 'block';
          checkDetails.style.display = 'none';
          readersName.removeAttribute('disabled')
          readersCardNumber.removeAttribute('disabled')
          readersName.value = '';
          readersCardNumber.value = '';
          setInputReadersNameValue('');
          setInputReadersCardNumberValue('');
          setCheckCardCredits({});
      }, 10000);
  } else {
      alert('Check user name or card number');
  };
};