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

export default (str) => {
  if (str === 'rules') {
    return 'Find the greatest common divisor of given numbers.';
  }

  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const gcd = getGcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(gcd);
  const qAndA = [];
  qAndA.push(question, answer);

  return qAndA;
};
