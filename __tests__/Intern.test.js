// import Intern class from lib/ for testing
const Intern = require('../lib/Intern')

// test to expect properties of the class to equal to new Manager with added property School
describe('Intern', () => {
    it('Saves new Intern information', () => {
        const newEmployee = new Intern('Ken', 55555, 'ken@email.com', UCLA);

        expect(newEmployee.name).toEqual('Ken');
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.any(String));
        expect(newEmployee.school).toEqual(expect.any(String));
    })
// test to expect methods of the Intern class to return new object values
    it('Tests Intern methods to return true to new Intern', () => {
        const newEmployee = new Intern('Ken', 55555, 'ken@email.com', UCLA);

        expect(newEmployee.getName()).toEqual(newEmployee.name);
        expect(newEmployee.getId()).toEqual(newEmployee.id);
        expect(newEmployee.getEmail()).toEqual(newEmployee.email);
        expect(newEmployee.getSchool()).toEqual(newEmployee.school);
        expect(newEmployee.getRole()).toEqual('Intern');
    })
})