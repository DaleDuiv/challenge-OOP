const Employee = require('../lib/Employee')

test('create an employee object', () => {
    const employee = new Employee('Dale Duivesteyn', 2, 'test@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});