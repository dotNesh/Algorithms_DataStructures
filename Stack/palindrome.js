/* The following checks whether a word is a palindrome */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word to check whether it is a palindrome or not ', (word) => {
  const letters = [];
  let reverseWord = '';

  // adds letters into the array(stack)
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // removes the letters ot the stack
  for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }

  if (word === reverseWord) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
  rl.close();
});
