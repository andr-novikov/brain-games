import getRandomNumber from '../getRandomNumber.js';

const progressionGame = (str) => {
  if (str === 'rules') {
    return 'What number is missing in the progression?';
  }

  const progression = [];
  progression.push(getRandomNumber());
  const commonDifference = getRandomNumber();

  while (progression.length < 10) {
    const nextNumber = progression[progression.length - 1] + commonDifference;
    progression.push(nextNumber);
  }

  const indexHiddenElement = getRandomNumber(0, progression.length);
  const correctAnswer = String(progression[indexHiddenElement]);
  progression[indexHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default progressionGame;
