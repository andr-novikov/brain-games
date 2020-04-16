import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }

  let divisor = 2;
  while (divisor <= number / 2) {
    if (number % divisor === 0) {
      return 'no';
    }
    divisor += 1;
  }
  return 'yes';
};

const primeGame = (str) => {
  if (str === 'rules') {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  const question = getRandomNumber();
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default primeGame;
