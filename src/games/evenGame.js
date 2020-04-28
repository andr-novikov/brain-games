import getRandomNumber from '../getRandomNumber.js';


export default (str) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  if (str === 'description') {
    return description;
  }

  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};
