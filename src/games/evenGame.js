import getRandomNumber from '../getRandomNumber.js';

const evenGame = (str) => {
  if (str === 'rules') {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  }

  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default evenGame;
