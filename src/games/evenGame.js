import getRandomNumber from '../getRandomNumber.js';

const evenGame = () => {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default evenGame;
