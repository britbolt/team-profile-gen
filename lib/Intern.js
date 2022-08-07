const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    // get school from input 
    getSchool () {
        return this.school;
    }

    // change employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 