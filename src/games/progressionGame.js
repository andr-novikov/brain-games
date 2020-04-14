import * as index from '../index.js';

const stepGames = () => {
  const arr = [];
  arr.push(index.getRandomNumber());
  const stepProgression = index.getRandomNumber(0, 20);
  const indexHiddenElement = index.getRandomNumber(0, 9);

  while (arr.length < 10) {
    arr.push(arr[arr.length - 1] + stepProgression);
  }

  const correctAnswer = String(arr[indexHiddenElement]);
  arr[indexHiddenElement] = '..';
  const question = arr.join(' ');

  return index.gameplay(question, correctAnswer);
};

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  let result = 0;
  while (result < 3) {
    const x = stepGames();
    if (x === 1) {
      result += 1;
    } else return;
  }
  index.endGame();
};

export default progressionGame;
