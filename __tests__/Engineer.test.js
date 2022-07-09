// import Employee class from lib/ for testing
const Employee = require('../lib/Employee')

// test to expect properties of the class to equal to new Manager with added property GitHub
// describe('Engineer', () => {
    it('Saves new Engineer information', () => {
        const newEmployee = new Engineer('Dav', 44444, 'dav@email.com', dav-dev);

        expect(newEmployee.name).toEqual('Dav');
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.any(String));
        expect(newEmployee.github).toEqual(expect.any(String));
    })
// test to expect methods of the Engineer class to return new object values
    it('Tests Engineer methods to return true to new Engineer', () => {
        const newEmployee = new Engineer ('Dav', 44444, 'dav@email.com', dav-dev);

        expect(newEmployee.getName()).toEqual(newEmployee.name);
        expect(newEmployee.getId()).toEqual(newEmployee.id);
        expect(newEmployee.getEmail()).toEqual(newEmployee.email);
        expect(newEmployee.getGitHub()).toEqual(newEmployee.github);
        expect(newEmployee.getRole()).toEqual('Engineer');
    })
// })