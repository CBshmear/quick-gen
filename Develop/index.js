// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];
const generateReadMe = (answers) =>
`# ${answers.title}
![GitHub License](https://img.sheilds.io/badge/license-${answers.license}-blue/)

## Description

${answers.description}

## Table of Contents 


- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contribution)
- [Testing](#Testing)
- [License](#License)

## Installation

${answers.instructions}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Testing

${answers.test}

## License

${answers.license}


---

## Questions
Please contact me with any further questions.
My GitHub username is ${answers.github}, and here is the link to my account: https://github.com/${answers.github}/ 
My E-mail address is ${answers.email}.
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter a title.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description.',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Please enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter testing instructions.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your e-mail address.'
    },
    {
      type: "list",
      message: "Please choose your license.",
      name: "license",
      choices: ["MIT", "apache 2.0", "MPL 1.1", "LGVLv2.1"],
    },
  
  ])
  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {}
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
