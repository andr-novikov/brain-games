import readlineSync from 'readline-sync';

let username = '';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const getAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === getAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);
    }
  }

  return console.log(`Congratulations, ${username}!`);
};
