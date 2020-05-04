import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';


const generateQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  return startGame(description, generateQuestionAndAnswer);
};
