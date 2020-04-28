import getRandomNumber from '../getRandomNumber.js';

export default (str) => {
  const description = 'What number is missing in the progression?';

  if (str === 'description') {
    return description;
  }

  const progression = [];
  const startOfProgression = getRandomNumber();
  const commonDifference = getRandomNumber();
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startOfProgression + commonDifference * i;
  }

  const indexHiddenElement = getRandomNumber(0, progression.length - 1);
  progression[indexHiddenElement] = '..';

  const answer = String(startOfProgression + commonDifference * indexHiddenElement);
  const question = progression.join(' ');

  return [question, answer];
};
