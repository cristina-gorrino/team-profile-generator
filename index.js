const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

inquirer
.prompt([
    {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?",
    },
    {
        type: "email",
        name: "email",
        message: "What is the employee's email?",
    },
    {
        type: "list",
        name:"role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]

    }
]).then(response => {
    // TODO: Implement
})

// first ask for role
// put together array of questions for inquirer
// ask the repeat questions (spread)
// then ask additional question
// then add employee to team array
// then ask if you want to add to the team
// loop