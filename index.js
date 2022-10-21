// Modules needed:
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// List of questions that we will use to help generate a personalized README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of what this project accomplishes.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for you to install your project?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'If you had any collaborators, please list them here (If none, type "N/A"):'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license (if any), do you have associated with your project?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has any special features, please list them here:'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('success!'));
}

// Initialize the app so that users are greeted with questions to help build their README
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error);
            } else {
                console.log(error);
            }
        });
}

// Call the init function here:
init();