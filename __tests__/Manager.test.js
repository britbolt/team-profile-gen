const Manager = require('../lib/Manager.js');

test('creates new manager object', () => {
    const manager = new Manager({name:'Tim', id:4, email:'tim@email.com'});

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});
