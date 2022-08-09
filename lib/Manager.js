const Employee = require('./Employee');

class Manager extends Employee {
    constructor ({name, id, email, officeNumber}) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // change employee role to manager 
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager;