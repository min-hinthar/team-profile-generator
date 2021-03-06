const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// create managerCard
const managerCard = (Manager) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning text-center">
                <h3>
                    ${Manager.name}
                </h3>
                <h4>
                    Manager
                </h4>
                <i class="medium material-icons">account_box</i>
            </div>
            <div class="card-body">
                <p class="id"> 
                    ID : ${Manager.id}
                </p>
                <p class="email"> 
                    EMAIL : <a href="mail:${Manager.email}"> ${Manager.email}</a>
                </p>
                <p class="office"> 
                    Office Number : ${Manager.officeNumber}
                </p>
            </div>
        </div>
    </div>
`
};

// create engineerCard
const engineerCard = (Engineer) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning text-center">
                <h3>
                    ${Engineer.name}
                </h3>
                <h4>
                    Engineer
                </h4>
                <i class="medium material-icons">build</i>
            </div>
            <div class="card-body">
                <p class="id"> 
                    ID : ${Engineer.id}
                </p>
                <p class="email"> 
                    EMAIL : <a href="mail:${Engineer.email}"> ${Engineer.email}</a>
                </p>
                <p class="gitHub"> 
                    GitHub : <a href="https://github.com/${Engineer.gitHub}"> ${Engineer.gitHub}</a>
                </p>
            </div>
        </div>
    </div>
`
};
        
        
// create internCard
const internCard = (Intern) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning text-center">
                <h3>
                    ${Intern.name}
                </h3>
                <h4>
                    Intern
                </h4>
                <i class="medium material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id"> 
                    ID : ${Intern.id}
                </p>
                <p class="email"> 
                    EMAIL : <a href="mail:${Intern.email}"> ${Intern.email}</a>
                </p>
                <p class="school"> 
                    School : ${Intern.school}
                </p>
            </div>
        </div>
    </div>
`
};
    
// indexHtml created to writeFile data of new employees
const indexHtml = (teamProfileCards) => {
    
    // Use bootstrap cards to display html. Ref: https://getbootstrap.com/docs/4.3/components/card/
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
                <!-- link bootstrap to html: https://getbootstrap.com/docs/4.3/getting-started/introduction/ -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <!-- link to icons: https://materializecss.com/icons.html -->
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 bg-info">
                        <h1 class="text-white text-center">
                            Team Profile
                        </h1>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="row col-12 d-flex justify-content-center">
                            ${teamProfileCards}
                        </div>
                    </div>
                </div>
            </div>
            <!-- src link for JQuery, Pooper to enable bootstrap functionality -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    </html>
    `
};
// generate teamProficeCards from teamProfile data written by user input for Manager, Engineer and Intern
htmlTemplate = (teamProfile) => {
    // create empty array to hold cards
    teamArray = [];
    
    // loop through teamProfile data
    for (let i = 0; i < teamProfile.length; i++ ) {
        const employee = teamProfile[i];
        const role = employee.getRole();
        
        // manager function is called for role === Manager 
        if (role === 'Manager') {
            const generateManager = managerCard(employee);
            teamArray.push(generateManager);
        }
        
        // engineer function is called for role === Engineer 
        if (role === 'Engineer') {
            const generateEngineer = engineerCard(employee);
            teamArray.push(generateEngineer);
        }
        
        // intern function is called for role === Intern 
        if (role === 'Intern') {
            const generateIntern = internCard(employee);
            teamArray.push(generateIntern);
        }
    }

// create teamProfileCards to join strings of teamArray
const teamProfileCards = teamArray.join('')

// return htmlTemplate function
const generateTeamProfile = indexHtml(teamProfileCards);
return generateTeamProfile;
};

// export htmlTemplate as module
module.exports = htmlTemplate;