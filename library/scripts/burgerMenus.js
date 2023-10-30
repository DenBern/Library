import { menuAuthorization, profileButton } from "./modals/variables.js";

export const burgerMenu = () => {
  const burgerButton = document.querySelector('.burger-menu-button');
  const burgerLinks = document.querySelectorAll('.burger-link');
  const burgerMenu = document.querySelector('.burger-links');

  const toggleClass = () => {
    burgerButton.classList.toggle('active-button');
    burgerMenu.classList.toggle('active-menu');
  };

  burgerButton.addEventListener('click', () => {
    toggleClass();
    menuAuthorization.classList.remove('active-profile');
  });

  burgerLinks.forEach(link => link.addEventListener('click', () => {
    toggleClass();
  }));

  window.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
      burgerButton.classList.remove('active-button');
      burgerMenu.classList.remove('active-menu');
    };
  });

  window.addEventListener('click', (event) => {
    if (!menuAuthorization.contains(event.target) && !profileButton.contains(event.target)) {
      menuAuthorization.classList.remove('active-profile-menu');
    };
  });
};