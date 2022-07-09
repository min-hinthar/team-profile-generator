// import Manager class from lib/ for testing
const Manager = require('../lib/Manager')

// test to expect properties of the class to equal to new Manager with added property officeNumber
describe('Manager', () => {
    it('Saves new Manager information', () => {
        const newEmployee = new Manager('Su', 33333, 'su@email.com', 007);

        expect(newEmployee.name).toEqual('Su');
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.any(String));
        expect(newEmployee.officeNumber).toEqual(expect.any(Number));
    })
// test to expect methods of the Manager class to return new object values
    it('Tests Manager methods to return true to new Manager', () => {
        const newEmployee = new Manager('Su', 33333, 'su@email.com', 007);

        expect(newEmployee.getName()).toEqual(newEmployee.name);
        expect(newEmployee.getId()).toEqual(newEmployee.id);
        expect(newEmployee.getEmail()).toEqual(newEmployee.email);
        expect(newEmployee.getOfficeNumber()).toEqual(newEmployee.officeNumber);
        expect(newEmployee.getRole()).toEqual('Manager');
    })
})