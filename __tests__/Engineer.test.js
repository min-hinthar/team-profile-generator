// import Employee class from lib/ for testing
const Engineer = require('../lib/Engineer')

// test to expect properties of the class to equal to new Manager with added property GitHub
// describe('Engineer', () => {
    it('Saves new Engineer information', () => {
        const newEmployee = new Engineer('Dav', 4, 'dav@email.com', 'dav-dev');

        expect(newEmployee.name).toBe('Dav');
        expect(typeof(newEmployee.id)).toBe(expect.any(Number));
        expect(typeof(newEmployee.email)).toBe(expect.any(String));
        expect(typeof(newEmployee.github)).toBe(expect.any(String));
    });
// test to expect methods of the Engineer class to return new object values
    it('Tests Engineer methods to return true to new Engineer', () => {
        const newEmployee = new Engineer ('Dav', 4, 'dav@email.com', 'dav-dev');

        expect(newEmployee.getName()).toBe(newEmployee.name);
        expect(newEmployee.getId()).toBe(newEmployee.id);
        expect(newEmployee.getEmail()).toBe(newEmployee.email);
        expect(newEmployee.getGitHub()).toBe(newEmployee.gitHub);
        expect(newEmployee.getRole()).toBe('Engineer');
    });
// })