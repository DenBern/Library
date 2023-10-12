import { screenGreeting } from "../screens/screenGreeting.js";
import { userLoggedRender } from "../screens/userLogged/userLoggedRender.js";

export let userLogged = {};
export const checkUserLogged = () => {
  let users = JSON.parse(localStorage.getItem('users')) ?? [];
  if (!users.length) {
    screenGreeting();
  } else {
    userLoggedRender();
  };
};