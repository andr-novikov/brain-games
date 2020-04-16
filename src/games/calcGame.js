import getRandomNumber from '../getRandomNumber.js';

const calcGame = (str) => {
  if (str === 'rules') {
    return 'What is the result of the expression?';
  }

  const arrayMathOperators = ['+', '-', '*'];
  const randomMathOperator = arrayMathOperators[getRandomNumber(0, arrayMathOperators.length)];
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const mathExpression = `${randomNumber1} ${randomMathOperator} ${randomNumber2}`;

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
      console.log('Error. Unknown math operator');
  }

  const question = mathExpression;
  const correctAnswer = String(result);

  return [question, correctAnswer];
};

export default calcGame;
