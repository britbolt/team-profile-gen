import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor ({name, id, email, github}) {
        super (name, id, email);

        this.github = github;
       }
       getGithub() {
        return this.github;
       }

    //    change employee role to engineer
        getRole () {
            return "Engineer";
        }
}

// export module
export default Engineer;