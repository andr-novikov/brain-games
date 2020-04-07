import readlineSync from 'readline-sync';

export const greeting = () => {
const actual = readlineSync.question('May I have your name? ');
console.log(`Hello, ${actual}!`);
}
