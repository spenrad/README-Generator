// TODO: Include packages needed for this application
const marky = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Breifly describe your project...'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project have?',
        choices: ['MIT', 'ISC', 'IBM Public License Version 1.0']
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What technologies should the user be familiar with if using this repo?'
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What technologies should the user be familiar with to contribute to the repo?'
      }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        // console.log("DUDE");
    });
}

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions);
    var fileName = "READTHIS.md"
    writeToFile(fileName, data);
}

// Function call to initialize app
init();
