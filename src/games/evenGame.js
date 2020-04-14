import * as index from '../index.js';

const stepGames = () => {
  const randomNumber = index.getRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return index.gameplay(randomNumber, correctAnswer);
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = 0;
  while (result < 3) {
    const x = stepGames();
    if (x === 1) {
      result += 1;
    } else return;
  }
  index.endGame();
};

export default evenGame;
