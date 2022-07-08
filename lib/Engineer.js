// import Employee class
const Employee = require('./Employee');

// create Engineer constructor class with added property gitHub and methods extended to Employee class
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email)
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }

    getRole(){
        return 'Engineer';
    }
}
// export module as Engineer class
module.export = Engineer;