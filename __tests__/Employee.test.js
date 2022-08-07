const Employee = require('../lib/Employee');


test('creates a employee object', () => {
    const Employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
