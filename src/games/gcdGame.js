import getRandomNumber from '../getRandomNumber.js';

const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return 1;
  }

  let gcd = a > b ? b : a;
  while (a % gcd !== 0 || b % gcd !== 0) {
    gcd -= 1;
  }

  return gcd;
};

const gcdGame = (str) => {
  if (str === 'rules') {
    return 'Find the greatest common divisor of given numbers.';
  }

  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getGcd(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

export default gcdGame;
