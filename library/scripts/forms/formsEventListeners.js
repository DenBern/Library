import { cardRegister } from "./cardRegister.js";
import { checkCard } from "./checkCard.js";
import { logIn } from "./logIn.js";
import { inputsValidation } from "../inputsValidation.js";
import { changeColorBorderInput } from "../helpers.js";
import { registration } from "./registration.js";
import {
  readersName,
  readersCardNumber,
  setInputEmailCardLogInValue,
  setInputReadersCardNumberValue,
  setInputPasswordLogInValue,
  formCardDetails,
  formCard,
  formLogIn,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  formRegistrarion,
  firstName,
  lastName,
  email,
  password,
  setInputReadersNameValue,
} from "./variables.js";

import { setFirstName, setLastName, setEmail, setPassword } from "../createNewUser.js";

export const formsEventListeners = () => {
  formRegistrarion.addEventListener('submit', (event) => {
    event.preventDefault();
    registration();
  });

  formCardDetails.addEventListener('submit', (event) => {
    event.preventDefault();
    cardRegister();
  });

  formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    checkCard();
  });

  formLogIn.addEventListener('submit', (event) => {
    event.preventDefault();
    logIn();
  });

  readersName.addEventListener('input', () => {
    setInputReadersNameValue(readersName.value)
    inputsValidation(readersName);
  });

  readersCardNumber.addEventListener('input', () => {
    setInputReadersCardNumberValue(readersCardNumber.value);
    inputsValidation(readersCardNumber);
  });

  inputEmailCardLogIn.addEventListener('input', () => {
    changeColorBorderInput(inputEmailCardLogIn.value.length >= 1, inputEmailCardLogIn);
    setInputEmailCardLogInValue(inputEmailCardLogIn.value);
  });

  inputPasswordLogIn.addEventListener('input', () => {
    changeColorBorderInput(inputPasswordLogIn.value.length >= 8, inputPasswordLogIn);
    setInputPasswordLogInValue(inputPasswordLogIn.value);
  });

  firstName.addEventListener('input', () => {
    setFirstName(firstName.value);
    inputsValidation(firstName);
  });

  lastName.addEventListener('input', () => {
    setLastName(lastName.value);
    inputsValidation(lastName);
  });

  email.addEventListener('input', () => {
    setEmail(email.value);
    inputsValidation(email);
  });

  password.addEventListener('input', () => {
    setPassword(password.value);
    inputsValidation(password);
  });
};