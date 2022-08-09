const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Engineer');
});

test('get employee name', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
