// require inquirer
const inquirer = require('inquirer');
// require fs file write package
const fs = require('fs');

// require template html file path
const htmlTemplate = require('./src/indexTemplate')

// import Manager class
const Manager = requrie('./lib/Manager');
// impor Engineer class
const Engineer = requrie('./lib/Engineer');
// import Intern class
const Intern = requrie('./lib/Intern');

// create new empty array for data to be written as Team Profile
const teamProfile = [];

// create an array of questions for Manager, Engineer, and Student classes input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Manager?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Office Number of the Manager?'
    },
]

// create an array of questions for Engineer with added property GitHub
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Engineer?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Engineer?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Git-Hub Account of the Engineer?'
    },
]

// create an array of questions for Intern with added property School
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Intern?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Intern?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the School of the Intern?'
    },
]

// create init function to prompt initial questions for Manager input
const init = () => {
    managerPrompt()
};

// create prompt from Manager questions to store data as new Manager object and push data to teamProfile array
const managerPrompt = () => {
    inquirer.prompt(managerQuestions)
    .then((data) => {
        data = new Manager(data.name, data.id, data.email, data.officeNumber)
        teamProfile.push(data);
        return newEmployeePrompt();
    })
};

// create prompt from Engineer questions to store data as new Engineer object and push data to teamProfile array
const engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
    .then((data) => {
        data = new Engineer(data.name, data.id, data.email, data.gitHub)
        teamProfile.push(data);
        return newEmployeePrompt();
    })
};

// create prompt from Intern questions to store data as new Intern object and push data to teamProfile array
const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then((data) => {
        data = new Intern(data.name, data.id, data.email, data.school)
        teamProfile.push(data);
        return newEmployeePrompt();
    })
};

// create prompts for Engineer and Intern options to be run after Manager data input
const newEmployeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: 'What type of team member do you want to input next?',
        choices: [
            {name: 'Engineer', value: 'inputEngineer'},
            {name: 'Intern', value: 'inputIntern'},
            {name: 'End', value: 'end'}
        ]
    }])
    .then( function (data) {
            if (data.employeeType === 'inputEngineer') {
                engineerPrompt();
            };
            if (data.employeeType === 'inputIntern') {
                internPrompt();
            };
            if (data.employeeType === 'end') {
                // Generate html markdown file
                writeFile(htmlTemplate(teamProfile));
            }
        })
    };

// function to write team profile data and generate html markdown
    const writeFile = (data) => {
        fs.writeFile('./dist/index.html', data, (err) => {
            if (err) {
                console.log('Error: Failed to write file');
            } else {
                console.log('Success! You have generated your team profile!');
            }
        })
    }; 