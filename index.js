const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const teamArr = [];

function init () {
    createManager();
}
init();
function createManager(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the manager's ID?",
        },
        {
            type: "email",
            name: "email",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
        {
            type: "list",
            name:"nextAction",
            message: "Add an engineer, intern, or finish building team?",
            choices: ["Engineer", "Intern", "Finish"]
    
        }
    ]).then(response => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArr.push(manager);

        if (response.nextAction === "Engineer") {
            createEngineer();
        } else if (response.nextAction === "Intern") {
            createIntern();
        } else if (response.nextAction === "Finish") {
            writeHTML(teamArr);
        }
    })
}


// first ask for role
// put together array of questions for inquirer
// ask the repeat questions (spread)
// then ask additional question
// then add employee to team array
// then ask if you want to add to the team
// loop