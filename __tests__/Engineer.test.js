const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dale Duivesteyn', 1, 'test@test.com', 'DaleDuiv');

    expect(engineer.getName()).toBe('Dale Duivesteyn');
    expect(engineer.getId()).toEqual((expect.any(Number)));
    expect(engineer.getEmail()).toBe('test@test.com');
    expect(engineer.getGithub()).toBe('DaleDuiv');
    expect(engineer.getRole()).toBe('Engineer');
});