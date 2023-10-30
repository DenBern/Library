import { changeFavorite } from "./changeContent/changeFavorite.js";
import { sliders } from "./sliders.js";
import { changeProfileMenu } from "./changeContent/changeProfileMenu.js";
import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { formsEventListeners } from "./forms/formsEventListeners.js";
import { modalsEventListeners } from "./modals/modalsEventListeners.js";
import { burgerMenu } from "./burgerMenus.js";
import { buyBookEventListener } from "./buyBook/buyBookEventListener.js";
import { changeCard } from "./changeContent/changeCard.js";

burgerMenu();
sliders();
changeFavorite();
changeCard();
changeProfileMenu(getRegisteredUsers());
modalsEventListeners();
formsEventListeners();
buyBookEventListener();


