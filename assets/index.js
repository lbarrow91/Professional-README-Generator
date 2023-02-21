const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { parse } = require("path");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Provide an installation guide for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project'
    },
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
        name: 'license',
        message: 'Choose your license type'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution information'
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests information'
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },   
    {
        type: 'input',
        name: 'email',
        message: 'So you can be reached for additional questions, what is your email address?'
    },   
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
                console.log(answers);
                const markdown = generateMarkdown(answers);
                writeToFile('./README.md',markdown);
        });
}

// function call to initialize program
init();
