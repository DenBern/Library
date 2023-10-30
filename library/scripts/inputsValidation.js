import { changeColorBorderInput } from "./helpers.js";

export const inputsValidation = (input) => {
  const minLengthFirstLastName = 1;
  const experationCodeLength = 2;
  const cvcLength = 3;
  const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patterCardNumber = /^[0-9]{16}$/;
  const minLengthPassword = 8;
  switch (input.id) {
    case 'first-name':
      (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input));
      break;
    case 'last-name':
      (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input));
      break;
    case 'email':
      (changeColorBorderInput(patternEmail.test(input.value), input));
      break;
    case 'password':
      (changeColorBorderInput(input.value.length >= minLengthPassword, input));
      break;
    case 'card-number':
      (changeColorBorderInput(patterCardNumber.test(input.value), input));
      break;
    case 'expiration-code-mounth':
      (changeColorBorderInput(input.value.length === experationCodeLength, input));
      break;
    case 'expiration-code-year':
      (changeColorBorderInput(input.value.length === experationCodeLength, input));
      break;
    case 'card-cvc':
      (changeColorBorderInput(input.value.length === cvcLength, input));
      break;
    default:
      input.style.borderColor = '';
  };
};