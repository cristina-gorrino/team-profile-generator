const fs = require('fs');
import {baseHTML, managerCard, engineerCard, internCard} from '/.templates.js'

function writeHTML() {
    baseHTML
    teamArr = [manager, eng1, eng2, intern1, intern2];
    // Build the cards for each member of the team to insert into the baseHTML
    var teamCards
    for (let i=0; i< teamArr.length; i++) {
        let role = teamArr[i].getRole();
        if (role === "Manager"){
            teamcards += managerCard;
        } else if (role === "Engineer") {
            teamCards =+ engineerCard;
        } else if (role === "Intern") {
            teamCards += internCard;
        }
    }
// TODO: need to import the classes? and info from user choices?
// TODO: need to pass in team member to card to fill in details
// TODO: need to pass in accumulated cards to base HTML to insert into the template
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
// writeCss();