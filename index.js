const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Describe your project',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please write installation instructions',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How is this program inteded to be used?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who worked with you on this?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Add test instructions',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Lets add your github! What username should I use?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Lets add your email for questions! What email should I use?',
    },
    {
        type: "list",
        message: "What license would you like to use?",
        choices: ['Apache_2.0', 'GPLv3', 'MIT', 'BSD_2--Clause'],
        name: "License",
    },
  ])
  .then(answers=>{
    const readmeFormat = 

 `
# ${answers.Title}
https://img.shields.io/badge/License-${answers.License}-blue.svg
    

## Table of Contents
- [License](#license)  
- [Description](#description)  
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)


## Description
    ${answers.Description}

## Installation
${answers.Installation}
## Usage
${answers.Usage}
## Questions
You can find my contact information on my GitHub or email me at ${answers.email} if you have any questions!
https://github.com/${answers.Github}`
    



    fs.writeFile("README.md", readmeFormat, (err) =>{
        if(err) {
            throw err
        }
     console.log('Success!')
})

});


// descr
// tbl cont
// install
// usaage
// license
// coontr
// tests
// questions
// added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// GitHub username