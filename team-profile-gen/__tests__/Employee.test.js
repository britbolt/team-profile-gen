const Employee = require('..lib/Employee');

test('creates a employee object', () => {
    const Employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(number));
    
    
});