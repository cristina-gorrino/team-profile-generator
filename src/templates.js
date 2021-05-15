function baseHTML(teamCards) {
    const baseHTML = `<!DOCTYPE html>
    <html lang="en">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Team Profile</title>
        <script src="https://kit.fontawesome.com/9f44423844.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" type = "text/css" href="./style.css">
    </head>
    <body>
        <header class="header-bar">
            <h1>My Team</h1>
        </header>
        <div class="card-container">
        ${teamCards.join('')}
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>`;
    return baseHTML;
}


function managerCard(employee) {
    const managerCard = `<div class="card" style="width: 18rem;">
    <div class="card-header text-white bg-primary">
        <h2>${employee.name}</h2>
        <div><i class="fas fa-mug-hot"></i> Manager</div>
    </div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: <span>${employee.id}</span></li>
        <li class="list-group-item">Email: <a href = "mailto: ${employee.email}"><span>${employee.email}</span></a></li>
        <li class="list-group-item">Office Number: <span>${employee.officeNumber}</span></li>
        </ul>
    </div>
    </div>`;
    return managerCard;
}


function engineerCard(employee) {
    const engineerCard = `<div class="card" style="width: 18rem;">
    <div class="card-header text-white bg-primary">
        <h2>${employee.name}</h2>
        <div><i class="fas fa-glasses"></i> Engineer</div>
    </div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: <span>${employee.id}</span></li>
        <li class="list-group-item">Email: <a href = "mailto: ${employee.email}"><span>${employee.email}</span></a></li>
        <li class="list-group-item">GitHub: <a href = "https://github.com/${employee.github}" target = "_blank"><span>https://github.com/${employee.github}</span></a></li>
        </ul>
    </div>
    </div>`;
    return engineerCard;
}


function internCard(employee) {
    const internCard = `<div class="card" style="width: 18rem;">
    <div class="card-header text-white bg-primary">
        <h2>${employee.name}</h2>
        <div><i class="fas fa-user-graduate"></i> Intern</div>
    </div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: <span>${employee.id}</span></li>
        <li class="list-group-item">Email: <a href = "mailto: ${employee.email}"><span>${employee.email}</span></a></li>
        <li class="list-group-item">School: <span>${employee.school}</span></li>
        </ul>
    </div>
    </div>`;
    return internCard;
}

module.exports = {
    baseHTML,
    managerCard,
    engineerCard,
    internCard
}