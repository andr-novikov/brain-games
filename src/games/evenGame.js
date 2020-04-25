import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const getQAndA = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < 3) {
    questionsAndAnswers.push(getQAndA());
  }

  return playGame(questionsAndAnswers, rules);
};
