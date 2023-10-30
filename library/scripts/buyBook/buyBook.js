import {
  setNewRentedBook,
  newRentedBook,
  buyBtns,
  setUserRentedBooks,
  userRentedBooks
} from "./variables.js";

import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { renderRentedBooks } from "../changeContent/renderRentedBooks.js";
import { changeProfileMenu } from "../changeContent/changeProfileMenu.js";
import { changeCard } from "../changeContent/changeCard.js";
import { body } from "../variables.js";
import { wrapperModalReg, wrapperModalLogIn } from "../forms/variables.js";
import { modalBuyCard } from "../forms/variables.js";

export const buyBook = () => {
  const currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged) || {};
  if (!getRegisteredUsers()) {
    wrapperModalReg.classList.add('active-blackout');
    body.classList.add('no-scroll');
  } else if (getRegisteredUsers() && !Object.keys(currentUserCreditsLogged).length) {
    wrapperModalLogIn.classList.add('active-blackout');
    body.classList.add('no-scroll');
  };

  localStorageUsersCredits.find(user => {
    if (user.logged) setUserRentedBooks(user.rentedBooks);
  });

  if (currentUserCreditsLogged && currentUserCreditsLogged.logged) {
    if (currentUserCreditsLogged.logged && !currentUserCreditsLogged.subscription) {
      modalBuyCard.classList.add('active-blackout')
      body.classList.add('no-scroll');
    } else if (currentUserCreditsLogged.subscription && currentUserCreditsLogged.logged) {
      let book = event.target.parentNode;
      let btnBook = event.target;
      let getBookName = book.childNodes[1].childNodes[3].childNodes[1].outerText;
      let getBookAuthor = book.childNodes[1].childNodes[3].childNodes[3].childNodes[2].textContent;
      btnBook.classList.add('book-own');
      btnBook.textContent = 'Own';
      btnBook.setAttribute('disabled', '');
      setNewRentedBook(getBookName, getBookAuthor);
      localStorageUsersCredits.map(user => {
        if (user === currentUserCreditsLogged) {
          user.books += 1;
          user.rentedBooks = [...userRentedBooks, newRentedBook];
          localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
          changeProfileMenu(getRegisteredUsers);
          renderRentedBooks();
          changeCard();
          buyBtns.forEach(btn => btn.removeEventListener('click', buyBook));
        };
      });
    } else {
      wrapperModalLogIn.classList.add('active-blackout');
      body.classList.add('no-scroll');
    };
  };
};