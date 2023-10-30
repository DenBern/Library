import {
  btnCloseModalRegistration,
  profileButton,
  menuAuthorization,
  btnRegistartionInModal,
  btnLogInInModal,
  btnLogInCards,
  btnProfileCard,
  btnLogIn,
  modalUserProfile,
  btnCloseUserProfile,
  btnCloseModalLogIn,
  wrapperModalLogIn,
  wrapperModalReg,
  btnRegister,
  btnCloseModalBuyCard,
  modalBuyCard,
  btnSignUpCards,
  btnSignUp,
  cardNumberInput,
  expirationCodeMounth,
  expirationCodeYear,
  cardCvc,
} from "./variables.js";
import { userLogOut } from "../changeContent/userLogOut.js";
import { closeRegistration } from "./closeRegistration.js";
import { body, btnMyProfile, btnLogOut } from "../variables.js";
import { formCardDetails } from "../forms/variables.js";
import { resetColorBorderInput } from "../helpers.js";
import { inputsValidation } from "../inputsValidation.js";

export const modalsEventListeners = () => {
  btnCloseModalRegistration.addEventListener('click', closeRegistration);

  profileButton.addEventListener('mouseover', () => {
    profileButton.getAttribute('title');
  });

  profileButton.addEventListener('click', () => {
    menuAuthorization.classList.add('active-profile-menu');
  });

  btnRegistartionInModal.addEventListener('click', () => {
    wrapperModalLogIn.classList.remove('active-blackout');
    wrapperModalReg.classList.add('active-blackout');
  });

  btnLogInInModal.addEventListener('click', () => {
    wrapperModalReg.classList.remove('active-blackout');
    wrapperModalLogIn.classList.add('active-blackout');
  });

  btnCloseUserProfile.addEventListener('click', () => {
    modalUserProfile.classList.remove('active-blackout');
    body.classList.remove('no-scroll');
  });

  btnLogInCards.addEventListener('click', () => {
    wrapperModalLogIn.classList.add('active-blackout');
    body.classList.add('no-scroll');
  });

  btnProfileCard.addEventListener('click', () => {
    modalUserProfile.classList.add('active-blackout');
    body.classList.add('no-scroll');
  });

  btnCloseModalLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.remove('active-blackout');
    body.classList.remove('no-scroll');
  });

  btnCloseModalLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.remove('active-blackout');
    body.classList.remove('no-scroll');
  });

  btnMyProfile.addEventListener('click', () => {
    menuAuthorization.classList.remove('active-profile-menu');
    modalUserProfile.classList.add('active-blackout');
    body.classList.add('no-scroll');
  });

  btnLogOut.addEventListener('click', () => userLogOut());

  btnCloseModalBuyCard.addEventListener('click', () => {
    modalBuyCard.classList.remove('active-blackout');
    body.classList.remove('no-scroll');
    formCardDetails.reset();
    resetColorBorderInput(cardNumberInput, expirationCodeMounth, expirationCodeYear, cardCvc);
  });

  btnSignUp.addEventListener('click', () => {
    wrapperModalReg.classList.add('active-blackout');
    body.classList.add('no-scroll');
  });

  btnSignUpCards.addEventListener('click', () => {
    wrapperModalReg.classList.add('active-blackout');
    body.classList.add('no-scroll');
  });

  if (btnLogIn) {
    btnLogIn.addEventListener('click', () => {
      wrapperModalLogIn.classList.add('active-blackout');
      menuAuthorization.classList.remove('active-profile-menu');
      body.classList.add('no-scroll');
    });
  };

  if (btnRegister) {
    btnRegister.addEventListener('click', () => {
      wrapperModalReg.classList.add('active-blackout');
      menuAuthorization.classList.remove('active-profile-menu');
      body.classList.add('no-scroll');
    });
  };

  cardNumberInput.addEventListener('input',
    function () {
      this.value = this.value.replace(/[^\d.]/g, '');
      inputsValidation(cardNumberInput);
    }
  );

  expirationCodeMounth.addEventListener('input',
    function () {
      this.value = this.value.replace(/[^\d.]/g, '');
      inputsValidation(expirationCodeMounth);
    }
  );

  expirationCodeYear.addEventListener('input',
    function () {
      this.value = this.value.replace(/[^\d.]/g, '');
      inputsValidation(expirationCodeYear);
    }
  );

  cardCvc.addEventListener('input',
    function () {
      this.value = this.value.replace(/[^\d.]/g, '');
      inputsValidation(cardCvc);
    }
  );
};