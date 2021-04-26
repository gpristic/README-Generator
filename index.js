const inquirer = require('inquirer');
const fs = require('fs');

const writeToFile = (answers) =>
`# ${answers.license}
## ${answers.title}

## DESCRIPTION
This application ${answers.description}.

## INSTALLATION

To install this application, you have to ${answers.installation}.

## USAGE
${answers.usage}.

## CONTRIBUTORS
Contributors to this project are: ${answers.contributing}.

## TESTS
Test run to make sure this project works: ${answers.tests}.

## QUESTIONS

If you have any questions about this application, you can reach me on Github. My username there is: ${answers.username}. You can send an email to me at ${answers.email}!
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Descibe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install you project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Give instructions for when to use this application.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What did you test to make sure this application worked?',
        },
        {
            type: 'list',
            message: 'What license is the application covered under?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'Other']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((answers => {
        const completeREADME = writeToFile(answers);

        fs.writeFile('README.md', completeREADME, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        );
    }));
