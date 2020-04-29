/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import readlineSync from 'readline-sync';

export default (nameGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(nameGame('description'));

  const numberOfGameRounds = 3;
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [question, correctAnswer] = nameGame();
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if (getAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
