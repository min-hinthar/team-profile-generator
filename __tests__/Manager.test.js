// import Employee class from lib/ for testing
const Manager = require('../lib/Manager')

// test to expect properties of the class to equal to new Manager with added property officeNumber
// describe('Manager', () => {
    it('Saves new Manager information', () => {
        const newEmployee = new Manager('Su', 3, 'su@email.com', 2007);

        expect(newEmployee.name).toBe('Su');
        expect(typeof(newEmployee.id)).toBe(expect.any(Number));
        expect(typeof(newEmployee.email)).toBe(expect.any(String));
        expect(typeof(newEmployee.officeNumber)).toBe(expect.any(Number));
    });
// test to expect methods of the Manager class to return new object values
    it('Tests Manager methods to return true to new Manager', () => {
        const newEmployee = new Manager('Su', 3, 'su@email.com', 2007);

        expect(newEmployee.getName()).toBe(newEmployee.name);
        expect(newEmployee.getId()).toBe(newEmployee.id);
        expect(newEmployee.getEmail()).toBe(newEmployee.email);
        expect(newEmployee.getOfficeNumber()).toBe(newEmployee.officeNumber);
        expect(newEmployee.getRole()).toBe('Manager');
    });
// })