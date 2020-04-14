import readlineSync from 'readline-sync';
import evenGame from './games/evenGame.js';
import calcGame from './games/calcGame.js';
import gcdGame from './games/gcdGame.js';
import progressionGame from './games/progressionGame.js';

let username = '';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export const chooseGame = () => {
  const games = ['Brain-Even', 'Brain-Calc', 'Brain-Gcd', 'Brain-Progression'];
  const index = readlineSync.keyInSelect(games, 'Which games?', { cancel: 'Exit' });
  switch (index) {
    case 0:
      evenGame();
      break;
    case 1:
      calcGame();
      break;
    case 2:
      gcdGame();
      break;
    case 3:
      progressionGame();
      break;
    default:
      console.log('exit');
  }
};

export const getRandomNumber = (min = 0, max = 100) => (
  Math.floor(Math.random() * (max - min)) + min
);

export const gameplay = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const getAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === getAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);
  return 0;
};

export const endGame = () => {
  console.log(`Congratulations, ${username}!`);
};
