const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// generate teamProficeCards from teamProfile data written by user input for Manager, Engineer and Intern


// create managerCard
const managerCard = (Manager)


// create engineerCard
const engineerCard = (Engineer)


// create internCard
const internCard = (Intern)


// template index.html for writeFile data of new employees to be stored
const htmlTemplate = (teamProfileCards) => {

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

// export htmlTemplate as module
module.exports = htmlTemplate;