import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const getQAndA = () => {
  const progression = [];
  progression.push(getRandomNumber());
  const commonDifference = getRandomNumber();

  while (progression.length < 10) {
    const nextNumber = progression[progression.length - 1] + commonDifference;
    progression.push(nextNumber);
  }

  const indexHiddenElement = getRandomNumber(0, progression.length);
  const answer = String(progression[indexHiddenElement]);
  progression[indexHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < 3) {
    questionsAndAnswers.push(getQAndA());
  }

  return playGame(questionsAndAnswers, rules);
};
