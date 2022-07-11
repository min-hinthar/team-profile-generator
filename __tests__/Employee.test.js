// import Employee class from lib/ for testing
const Employee = require('../lib/Employee')

// test to expect properties of the class to equal to new Employee
// describe('Employee', () => {
    it('Saves new Employee information', () => {
        const newEmployee = new Employee ('Min', 2, 'min@email.com');

        expect(newEmployee.name).toBe('Min');
        expect(parseInt(newEmployee.id)).toEqual(expect.any(Number));
        expect(typeof(newEmployee.email)).toEqual(expect.any(String));
    });
// test to expect methods of the Employee class to return new object values
    it('Tests new Employee methods to return true to new class', () => {
        const newEmployee = new Employee ('Min', 2, 'min@email.com');

        expect(newEmployee.getName()).toBe(newEmployee.name);
        expect(newEmployee.getId()).toBe(newEmployee.id);
        expect(newEmployee.getEmail()).toBe(newEmployee.email);
        expect(newEmployee.getRole()).toBe('Employee');
    });
// })