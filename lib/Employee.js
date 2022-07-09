// create parent constructor class with common properties (name, id, email) and methods
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Employee'
    }
}
// export module as Employee class
module.exports = Employee;