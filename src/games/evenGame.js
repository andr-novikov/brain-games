import getRandomNumber from '../getRandomNumber.js';

export default (str) => {
  if (str === 'rules') {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  }

  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const qAndA = [];
  qAndA.push(question, answer);

  return qAndA;
};
