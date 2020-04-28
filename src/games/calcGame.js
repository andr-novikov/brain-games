import getRandomNumber from '../getRandomNumber.js';

export default (str) => {
  const description = 'What is the result of the expression?';

  if (str === 'description') {
    return description;
  }

  const mathOperators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, mathOperators.length - 1);
  const randomMathOperator = mathOperators[randomIndex];
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomMathOperator} ${randomNumber2}`;

  let result = 0;
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
