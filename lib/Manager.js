// import Employee class
const Employee = require('./Employee');

// create Manager constructor class with added property officeNumber and methods extended to Employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}
// export module as Manager class
module.export = Manager;