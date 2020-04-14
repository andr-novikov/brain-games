import * as index from '../index.js';

const stepGames = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumber1 = index.getRandomNumber();
  const randomNumber2 = index.getRandomNumber();
  const randomOperator = mathOperators[index.getRandomNumber(0, 3)];
  const mathExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  let result = 0;
  switch (randomOperator) {
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
      console.log('Error. Unknown operator');
  }

  const correctAnswer = String(result);

  return index.gameplay(mathExpression, correctAnswer);
};


const calcGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = 0;
  while (result < 3) {
    const x = stepGames();
    if (x === 1) {
      result += 1;
    } else return;
  }
  index.endGame();
};

export default calcGame;
