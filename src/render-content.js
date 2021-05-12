const fs = require('fs');

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