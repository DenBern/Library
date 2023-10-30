import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { changeProfileMenu } from "../changeContent/changeProfileMenu.js";
import { changeBtns, resetColorBorderInput } from "../helpers.js";
import { changeUserCard } from "../changeContent/changeUserCard.js";
import { body } from "../variables.js";
import {
  formLogIn,
  inputPasswordLogInValue,
  inputEmailCardLogInValue ,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  wrapperModalLogIn,
  btnLogInModal,
} from "./variables.js"

export const logIn = () => {
  if (!getRegisteredUsers()) return alert('User is not registered');

  const currentUserCreditsLogged = localStorageUsersCredits.find(user =>
    (user.email === inputEmailCardLogInValue || user.cardNumber === inputEmailCardLogInValue) &&
    (user.password === inputPasswordLogInValue)
  );

  if (!currentUserCreditsLogged) return alert('Check email / readers card or password');

  if (Object.keys(currentUserCreditsLogged).length) {
    localStorageUsersCredits.map(user => {
      if (user === currentUserCreditsLogged) {
        user.logged = !user.logged;
        user.visits = user.visits + 1;
        localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
        changeProfileMenu(getRegisteredUsers());
        formLogIn.reset();
        resetColorBorderInput(inputEmailCardLogIn, inputPasswordLogIn);
        setTimeout(() => {
          wrapperModalLogIn.classList.remove('active-blackout');
          body.classList.remove('no-scroll');
          btnLogInModal.style.background = '';
          btnLogInModal.textContent = 'Log In!';
        }, 1000);
        btnLogInModal.style.background = '#32CD32';
        btnLogInModal.textContent = 'Welcome!';
        changeBtns();
        changeUserCard();
      };
    });
  };
};