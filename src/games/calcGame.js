import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const getQAndA = () => {
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

  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < 3) {
    questionsAndAnswers.push(getQAndA());
  }

  return playGame(questionsAndAnswers, rules);
};
