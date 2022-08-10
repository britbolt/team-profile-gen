import Employee from "./Employee.js";

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
export default Manager;