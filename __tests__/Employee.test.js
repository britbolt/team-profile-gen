const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com', 'Employee');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');
});

test('get employee name', () => {
    const employee = new Employee('Bob');
    expect(employee.getName()).toBe('Bob');
});

