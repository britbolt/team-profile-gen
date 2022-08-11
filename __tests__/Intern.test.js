import Intern from '../lib/Intern.js';

test('creates new intern object', () => {
    const intern = new Intern({name:'Kat', id:2, email:'kat@email.com', school:'GW'});

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});