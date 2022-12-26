// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];
const generateReadMe = ({title, description, instructions, usage, contribution, test, github, email}) =>
`# ${title}

## Description

${description}

## Table of Contents 


- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contribution)
- [Testing](#Testing)
- [License](#License)

## Installation

${instructions}

## Usage

${usage}

## Contribution

${contribution}

## Testing

${test}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

## Questions
Please contact me with any further questions.
My GitHub username is ${github}, and here is the link to my account: https://github.com/${github}/ 
My E-mail address is ${email}.
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
