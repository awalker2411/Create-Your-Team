const inquirer = require(`inquirer`)
const fs = require(`fs`)
const generateHTML = require(`./src/generateHTML`)
const Manager = require(`./lib/manager`)
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const myTeam = []


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
            `Create Team Page`,
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


function handleManagerQueries(){
    inquirer.prompt(managerQueries)
        .then(responses => {
            const newManager = new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.managerOffice);
            myTeam.push(newManager);
        })
        .then(handleTeamQuery);
}

function handleEngineerQueries(){
    inquirer.prompt(engineerQueries)
        .then(responses => {
            const newEngineer = new Engineer(responses.engineerName, responses.engineerID, responses.engineerEmail, responses.engineerGit);
            myTeam.push(newEngineer);
        })
        .then(handleTeamQuery);

}

function handleInternQueries(){
    inquirer.prompt(internQueries)
        .then(responses => {
            const newIntern = new Intern(responses.internName, responses.internID, responses.internEmail, responses.internSchool);
            myTeam.push(newIntern);
        })
        .then(handleTeamQuery);

}

function createPage(){
    fs.writeFile(`./dist/index.html`, generateHTML(myTeam), (err) => {if(err){throw err}});
}

function handleTeamQuery(){
    inquirer.prompt(teamQuery)
        .then(function({ employeeChoice }){
            if(employeeChoice === `Engineer`){
                handleEngineerQueries();
            }else if(employeeChoice === `Intern`){
                handleInternQueries();
            }else if(employeeChoice === `Create Team Page`){
                createPage();
            }else if(employeeChoice === `---Exit Application---`){
                prompt.ui.close();
            }
        })
}

function init(){
    handleManagerQueries();
}

init();