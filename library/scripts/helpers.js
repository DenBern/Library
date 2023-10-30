import { getLocalStorageUsersCredits, localStorageUsersCredits } from "./localStorage/getLocalStorageUserCredits.js";
import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { buyBtns, setUserRentedBooks, userRentedBooks } from "./buyBook/variables.js";

export const changeBtns = () => {
  getLocalStorageUsersCredits(getRegisteredUsers());
  localStorageUsersCredits.find(user => {
    if (user.logged) {
      setUserRentedBooks(user.rentedBooks);
    };
    if (userRentedBooks.length) {
      userRentedBooks.forEach(book => {
        buyBtns.forEach(buy => {
          let name = buy.parentElement.childNodes[1].childNodes[3].childNodes[1].textContent.trim().toLocaleLowerCase();
          if (book.bookName.toLowerCase() === name) {
            buy.classList.add('book-own');
            buy.textContent = 'Own';
            buy.setAttribute('disabled', '');
          };
       });
      });
    };
  });
};

export const resetColorBorderInput = (...inputs) => {
    inputs.forEach(input => input.style.borderColor = '');
};

export const changeColorBorderInput = (validation, input) => validation ? input.style.borderColor = '#228b22' : input.style.borderColor = '#ff6161';