import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let divisor = 2;
  while (divisor <= number / 2) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

export default (str) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  if (str === 'description') {
    return description;
  }

  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
