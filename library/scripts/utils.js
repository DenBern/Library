export const generateCardNumber = () => {
  let cardNumber = '';
  for (let i = 0; i < 9; i++) {
    const randomDigit = Math.floor(Math.random() * 16);
    const hexDigit = randomDigit.toString(16);
    cardNumber += hexDigit;
  };
  return cardNumber.toUpperCase();
};
