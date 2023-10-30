import { body } from "../variables.js";
import  { modalBuyCard, btnBuyCard }from './variables.js';
import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";

export const cardRegister = () => {
  localStorageUsersCredits.map(user => {
    if (user.logged && !user.subscription) {
      user.subscription = true;
      localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
      setTimeout(() => {
          modalBuyCard.classList.remove('active-blackout');
          btnBuyCard.style.background = '';
          body.classList.remove('no-scroll');
      }, 1000);
      btnBuyCard.style.background = '#32CD32';
      btnBuyCard.textContent = 'Done!';
    };
  });
};