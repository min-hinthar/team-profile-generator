// import Employee class from lib/ for testing
const Intern = require('../lib/Intern')

// test to expect properties of the class to equal to new Manager with added property School
// describe('Intern', () => {
    it('Saves new Intern information', () => {
        const newEmployee = new Intern('Ken', 5, 'ken@email.com', 'UCLA');

        expect(newEmployee.name).toBe('Ken');
        expect(parseInt(newEmployee.id)).toEqual(expect.any(Number));
        expect(typeof(newEmployee.email)).toEqual(expect.any(String));
        expect(typeof(newEmployee.school)).toEqual(expect.any(String));
    });
// test to expect methods of the Intern class to return new object values
    it('Tests Intern methods to return true to new Intern', () => {
        const newEmployee = new Intern ('Ken', 5, 'ken@email.com', 'UCLA');

        expect(newEmployee.getName()).toBe(newEmployee.name);
        expect(newEmployee.getId()).toBe(newEmployee.id);
        expect(newEmployee.getEmail()).toBe(newEmployee.email);
        expect(newEmployee.getSchool()).toBe(newEmployee.school);
        expect(newEmployee.getRole()).toBe('Intern');
    });
// })