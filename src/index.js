import readlineSync from 'readline-sync';
import evenGame from './games/evenGame.js';
import calcGame from './games/calcGame.js';
import gcdGame from './games/gcdGame.js';
import progressionGame from './games/progressionGame.js';
import primeGame from './games/primeGame.js';

let username = '';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export const gameplay = (nameGame) => {
  console.log(nameGame('rules'));

  for (let i = 0; i < 3; i += 1) {
    const arrayQAndA = nameGame();
    const question = arrayQAndA[0];
    const correctAnswer = arrayQAndA[1];

    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === getAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export const chooseGame = () => {
  const games = ['Parity Check', 'Calculator', 'Greatest Common Divisor', 'Arithmetic progression', 'Number Is Prime?'];
  const index = readlineSync.keyInSelect(games, 'Which games?', { cancel: 'Exit' });
  switch (index) {
    case 0:
      gameplay(evenGame);
      break;
    case 1:
      gameplay(calcGame);
      break;
    case 2:
      gameplay(gcdGame);
      break;
    case 3:
      gameplay(progressionGame);
      break;
    case 4:
      gameplay(primeGame);
      break;
    default:
      console.log('Exit');
  }
};
