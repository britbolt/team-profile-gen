import Engineer from "../lib/Engineer.js";

test('creates new engineer object', () => {
    const engineer = new Engineer({name:'Sam', id:3, email:'sam@email.com', github:'sam123'});

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});


