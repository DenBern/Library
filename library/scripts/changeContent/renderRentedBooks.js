import { getLocalStorageUsersCredits, localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { setUserRentedBooks, userRentedBooks } from "../buyBook/variables.js";
import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { booksList } from "../variables.js";

export const renderRentedBooks = () => {
    getLocalStorageUsersCredits(getRegisteredUsers());
    localStorageUsersCredits.find(user => {
        if (user.logged) {
            setUserRentedBooks(user.rentedBooks);
        };
    });
    if (userRentedBooks) {
        booksList.innerHTML = '';
        userRentedBooks.forEach(book => {
            booksList.innerHTML += `<li class="rented-book">
            ${book.bookName.trim().toLowerCase() + ',' + book.bookAuthor.toLowerCase()}
        </li>`;
        });
    };
};