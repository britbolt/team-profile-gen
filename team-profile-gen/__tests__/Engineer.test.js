const Engineer = require('../lib/Engineer');

test('creates an enginer object', () => {
    const engineer = new Engineer('Dave');

    exect(engineer.name)toBe('Dave');
});