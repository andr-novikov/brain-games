import readlineSync from 'readline-sync';
import evenGame from './games/evenGame.js';
import calcGame from './games/calcGame.js';
import gcdGame from './games/gcdGame.js';
import progressionGame from './games/progressionGame.js';
import primeGame from './games/primeGame.js';

let userName = '';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const playGame = (nameGame) => {
  console.log(nameGame('rules'));

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = nameGame();
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === getAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export const chooseGame = () => {
  const games = ['Parity Check', 'Calculator', 'Greatest Common Divisor', 'Arithmetic progression', 'Number Is Prime?'];
  const index = readlineSync.keyInSelect(games, 'Which games?', { cancel: 'Exit' });
  switch (index) {
    case 0:
      playGame(evenGame);
      break;
    case 1:
      playGame(calcGame);
      break;
    case 2:
      playGame(gcdGame);
      break;
    case 3:
      playGame(progressionGame);
      break;
    case 4:
      playGame(primeGame);
      break;
    default:
      console.log('Exit');
  }
};
