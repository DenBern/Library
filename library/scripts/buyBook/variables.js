const buyBtns = document.querySelectorAll('.book-buy');

let newRentedBook = {
  bookName: '',
  bookAuthor: '',
  btnDisabled: true,
};

let userRentedBooks = [];

const setNewRentedBook = (name, author) => {
  newRentedBook.bookName = name;
  newRentedBook.bookAuthor = author;
  newRentedBook.btnDisabled = !newRentedBook.btnDisabled;
};

const setUserRentedBooks = (books) => userRentedBooks = books;

export {
  buyBtns,
  newRentedBook,
  setNewRentedBook,
  userRentedBooks,
  setUserRentedBooks,
};

