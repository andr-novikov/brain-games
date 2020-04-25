import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

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

const getQAndA = () => {
  const question = getRandomNumber();
  const answer = isPrime(question);

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < 3) {
    questionsAndAnswers.push(getQAndA());
  }

  return playGame(questionsAndAnswers, rules);
};
