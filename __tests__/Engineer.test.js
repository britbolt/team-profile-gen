const Engineer = require('../lib/Engineer.js');

test('creates new engineer object', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam123');

    expect(engineer.name).toEqual('Sam');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});


