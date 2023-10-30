import { buyBook } from "./buyBook.js";
import { buyBtns } from "./variables.js";

export const buyBookEventListener = () => {
  buyBtns.forEach(buy => buy.removeEventListener('click', buyBook));
  buyBtns.forEach(buy => buy.addEventListener('click', (event) => buyBook(event)));
};