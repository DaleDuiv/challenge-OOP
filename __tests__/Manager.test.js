const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('James Jones', 1, 'jj@test.com', '12345678');

    expect(manager.getName()).toBe('James Jones');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('jj@test.com');
    expect(manager.getOfficeNum()).toBe('12345678');
    expect(manager.getRole()).toBe('Manager');
});