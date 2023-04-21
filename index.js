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
      name: 'License',
      message: 'What is your Github URL?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who worked with you on this?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'What is your Github URL?',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'What is your Github URL?',
    },
    {
        type: "list",
        message: "What license did you use?",
        choices: ['APACHE2.0', 'GNU General Public License v3.0', 'MIT', 'BS2-Clause "Simplified"', 'None'],
        name: "license",
      },

  ])
  .then(answers=>{
//     const htmlString = 

//  `<!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="x-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>

//         <body>
//             <h1>${answers.user}</h1>>
//             <h2>${answers.hobby}</h2>
//             <h2>${answers.location}</h2>

//             <ul>
//             <li> LinkedIn Profile:<a href="${answers.LinkedIn}"></a></li>
//             <li> LinkedIn Profile:<a href="${answers.Github}"></a></li>
//             </ul>
//         </body>
//     </html>`
    



    fs.writeFile("README.md", fs.readFile, (err) =>{
        if(err) {
            throw err
        }
     console.log('Success!')
})

});
