// import Employee class
const Employee = require('./Employee');

// create Engineer constructor class with added property School and methods extended to Employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}
// export module as Intern class
module.export = Intern;