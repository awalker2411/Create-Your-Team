const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require(`./lib/manager`)
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)


const managerQueries = [
    {
        type: `input`,
        message: `What is the manager's name?`,
        name: `managerName`
    },

    {
        type: `input`,
        message: `What is the manager's ID number?`,
        name: `managerID`
    },

    {
        type: `input`,
        message: `What is the manager's office number?`,
        name: `managerOffice`
    },

    {
        type: `input`,
        message: `What is the manager's email address?`,
        name: `managerEmail`
    }
]

const teamQuery = [
    {
        type: `list`,
        message: `Which employee type would you like to create?`,
        choices: [
            `Engineer`,
            `Intern`,
            `---Exit Application---`
        ],
        name: `employeeChoice`
    },
]

const engineerQueries = [
    {
        type: `input`,
        message: `What is the engineer's name?`,
        name: `engineerName`
    },

    {
        type: `input`,
        message: `What is the engineer's ID number?`,
        name: `engineerID`
    },

    {
        type: `input`,
        message: `What is the engineer's GitHub username?`,
        name: `engineerGit`
    },

    {
        type: `input`,
        message: `What is the engineer's email address?`,
        name: `engineerEmail`
    }
]

const internQueries = [
    {
        type: `input`,
        message: `What is the intern's name?`,
        name: `internName`
    },

    {
        type: `input`,
        message: `What is the intern's ID number?`,
        name: `internID`
    },

    {
        type: `input`,
        message: `What is the intern's school?`,
        name: `internSchool`
    },

    {
        type: `input`,
        message: `What is the intern's email address?`,
        name: `internEmail`
    }
]