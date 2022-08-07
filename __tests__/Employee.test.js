const Employee = require('../lib/Employee');


test('creates a employee object', () => {
    const Employee = new Employee('Bob', 1, 'bob@email.com');

    expect(Employee.name).toEqual(expect.any(String));
    expect(Employee.id).toEqual(expect.any(Number));
    expect(Employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
