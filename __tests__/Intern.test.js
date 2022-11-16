const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Jim Jones', 1, 'jimjones@test.com', 'Coding University');

    expect(intern.getName()).toBe('Jim Jones');
    expect(intern.getId()).toEqual((expect.any(Number)));
    expect(intern.getEmail()).toBe('jimjones@test.com');
    expect(intern.getSchool()).toBe('Coding University');
    expect(intern.getRole()).toBe('Intern');
});