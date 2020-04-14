import * as index from '../index.js';

const stepGames = () => {
  const randomNumber1 = index.getRandomNumber();
  const randomNumber2 = index.getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  return index.gameplay(question, correctAnswer);
};

const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return 1;
  }
  let divisor = a > b ? b : a;
  while (a % divisor !== 0 || b % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};


const gcdGames = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let result = 0;
  while (result < 3) {
    const x = stepGames();
    if (x === 1) {
      result += 1;
    } else return;
  }
  index.endGame();
};

export default gcdGames;
