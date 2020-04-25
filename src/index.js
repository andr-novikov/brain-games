/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import readlineSync from 'readline-sync';

export default (questionsAndAnswers, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (const stepGame of questionsAndAnswers) {
    const [question, correctAnswer] = stepGame;
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
