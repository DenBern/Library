let newUserCredits = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cardNumber: '',
  logged: false,
  visits: 0,
  bonuses: 0,
  books: 0,
  subscription: false,
  rentedBooks: [],
};

let usersCredits = [];

const setUsersCredits = (value) => usersCredits = value;
const setFirstName = (value) => newUserCredits.firstName = value;
const setLastName = (value) => newUserCredits.lastName = value;
const setEmail = (value) => newUserCredits.email = value;
const setPassword = (value) => newUserCredits.password = value;
const setUserCardNumber = (value) => newUserCredits.cardNumber = value;
const setUserLogged = () => newUserCredits.logged = !newUserCredits.logged;
const setUserVisits = () => newUserCredits.visits += 1;
const setUserBonuses = (value) => newUserCredits.bonuses = value;

export {
  usersCredits,
  newUserCredits,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setUserCardNumber,
  setUserLogged,
  setUserVisits,
  setUserBonuses,
  setUsersCredits,
};

