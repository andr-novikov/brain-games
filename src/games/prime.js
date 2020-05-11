import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

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

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return playGame(description, generateQuestionAndAnswer);
};
