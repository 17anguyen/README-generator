
# ReadMe File Generator
## Description
This application is written to create a readme file with the critera documented by the target user.
 
The application will be invoked by using the following command:

```bash
node index.js
```

![image](https://user-images.githubusercontent.com/43556891/233573547-78ae2532-d065-468f-8639-1d1a0b7f4097.png)
https://watch.screencastify.com/v/vx5NytKLEzbGWSVNx7ix

## Sources 
table of contents
https://community.atlassian.com/t5/Bitbucket-questions/How-to-write-a-table-of-contents-in-a-Readme-md/qaq-p/673363
License badges
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
https://shields.io/

## Installation
to install please log in terminal "npm i inquirer@8.2.4
to run program log in terminal "node index.js"
## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
