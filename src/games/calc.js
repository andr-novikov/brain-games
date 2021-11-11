import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const generateQuestionAndAnswer = () => {
  const mathOperators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, mathOperators.length - 1);
  const randomMathOperator = mathOperators[randomIndex];
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomMathOperator} ${randomNumber2}`;

  let result;
  switch (randomMathOperator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      return null;
  }

  const answer = String(result);

  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';

  playGame(description, generateQuestionAndAnswer);
};
