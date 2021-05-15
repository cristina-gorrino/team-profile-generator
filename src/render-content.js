const fs = require('fs');
const templates = require('./templates.js'); 

function writeHTML(teamArr) {
    // Build the cards for each member of the team by checking for role and using correct template
    var teamCards = teamArr.map((employee) => {
        let role = employee.getRole();
        if (role === "Manager"){
            return templates.managerCard(employee);
        } else if (role === "Engineer") {
            return templates.engineerCard(employee);
        } else if (role === "Intern") {
            return templates.internCard(employee);
        }
    });

    const finalContent = templates.baseHTML(teamCards);
    // Write CSS file that goes with HTML
    writeCss();
    return finalContent;
    }

function writeCss() {
    const content = `.header-bar{
        color: white;
        background-color: crimson;
        padding: 5px;
        text-align: center;
    }
    
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    
    .card {
        box-shadow: 10px 5px 5px gray;
        margin: 10px 10px 10px 10px;
    }`
    fs.writeFile("./dist/style.css", content, (err) => {
        err ? error.log(err) : console.log("Successfully wrote CSS") 
    })
}

module.exports = {
    writeHTML
}