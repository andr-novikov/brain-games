import getRandomNumber from '../getRandomNumber.js';

export default (str) => {
  if (str === 'rules') {
    return 'What is the result of the expression?';
  }

  const mathOperators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, mathOperators.length);
  const randomMathOperator = mathOperators[randomIndex];
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
  const answer = String(result);
  const qAndA = [];
  qAndA.push(question, answer);

  return qAndA;
};
