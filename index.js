const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const renderContent = require ('./src/render-content.js') ;
const teamArr = [];

function init () {
    // Always begin the team by creating the manager
    createManager();
}
init();

function createManager(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
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
            writeFiles(teamArr);
        }
    })
}

function createEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
        },
        {
            type: "email",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
        },
        {
            type: "list",
            name:"nextAction",
            message: "Add an engineer, intern, or finish building team?",
            choices: ["Engineer", "Intern", "Finish"]
    
        }
    ]).then(response => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamArr.push(engineer);

        if (response.nextAction === "Engineer") {
            createEngineer();
        } else if (response.nextAction === "Intern") {
            createIntern();
        } else if (response.nextAction === "Finish") {
            writeFiles(teamArr);
        }
    })
}

function createIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
        },
        {
            type: "email",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
        {
            type: "list",
            name:"nextAction",
            message: "Add an engineer, intern, or finish building team?",
            choices: ["Engineer", "Intern", "Finish"]
    
        }
    ]).then(response => {
        let intern = new Intern(response.name, response.id, response.email, response.school);
        teamArr.push(intern);

        if (response.nextAction === "Engineer") {
            createEngineer();
        } else if (response.nextAction === "Intern") {
            createIntern();
        } else if (response.nextAction === "Finish") {
            writeFiles(teamArr);
        }
    })
}

function writeFiles(teamArr) {
    fs.writeFile("./dist/index.html", renderContent.writeHTML(teamArr), (err) => {
        err ? error.log(err) : console.log("Successfully wrote HTML")} 
    );
}

