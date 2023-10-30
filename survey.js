const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'What\'s your name? Nicknames are also acceptable :)\n',
  'What\'s an activity you like doing?\n',
  'What do you listen to while doing that?\n',
  'Which meal is your favourite (e.g., dinner, brunch, etc.)?\n',
  'What\'s your favourite thing to eat for that meal?\n',
  'Which sport is your absolute favourite?\n',
  'What is your superpower? In a few words, tell us what you are amazing at!\n',
];

const profile = {};

const askQuestion = (index) => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      profile[`answer${index + 1}`] = answer;
      askQuestion(index + 1);
    });
  } else {
    generateProfile();
  }
};

const generateProfile = () => {
  console.log('\nHere is your profile:');
  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i].trim()}: ${profile[`answer${i + 1}`]}`);
  }
  console.log('Thank you for participating!\n');
  rl.close();
};

askQuestion(0);
