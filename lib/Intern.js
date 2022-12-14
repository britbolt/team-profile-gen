import Employee from "./Employee.js";

class Intern extends Employee  {
    // terminal says this is not a constructor ???
    constructor ({name, id, email, school}) {
        super (name, id, email); 

        this.school = school; 
    }
    getSchool () {
        return this.school;
    }

    // change employee role to intern
    getRole () {
        return "Intern";
    }
}

// export module
export default Intern; 