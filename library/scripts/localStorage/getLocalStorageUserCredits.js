let localStorageUsersCredits = [];

const getLocalStorageUsersCredits = (registered) => {
  if (!registered) return;
  const getLocalCredits = localStorage.getItem('usersCredits');
  localStorageUsersCredits = JSON.parse(getLocalCredits);
};

export {
  localStorageUsersCredits,
  getLocalStorageUsersCredits
};