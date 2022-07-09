// import Employee class from lib/ for testing
const Employee = require('../lib/Employee')

// test to expect properties of the class to equal to new Employee
// describe('Employee', () => {
    it('Saves new Employee information', () => {
        const newEmployee = new Employee('Min', 22222, 'min@email.com');

        expect(newEmployee.name).toEqual('Min');
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.any(String));
    })
// test to expect methods of the Employee class to return new object values
    it('Tests new Employee methods to return true to new class', () => {
        const newEmployee = new Employee ('Min', 22222, 'min@email.com');

        expect(newEmployee.getName()).toEqual(newEmployee.name);
        expect(newEmployee.getId()).toEqual(newEmployee.id);
        expect(newEmployee.getEmail()).toEqual(newEmployee.email);
        expect(newEmployee.getRole()).toEqual('Employee');
    })
// })