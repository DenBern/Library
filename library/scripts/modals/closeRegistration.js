import { resetColorBorderInput } from "../helpers.js";
import { body } from "../variables.js";
import { formRegistrarion,wrapperModalReg, firstName, lastName, email, password } from "../forms/variables.js";

export const closeRegistration = () => {
  formRegistrarion.reset();
  resetColorBorderInput(firstName, lastName, email, password);
  wrapperModalReg.classList.remove('active-blackout');
  body.classList.remove('no-scroll');
};