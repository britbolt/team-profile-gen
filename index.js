// import npm packages 
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';


// import classes 
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';


// import html template 
import generateTeam from './src/template.js';

// array for team to insert into template
const employeesArray = [];

//  prompts to add an employee to the team
const employeeQuestions = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?", 
        validate(answer) {
            if(!answer) {
                return "please provide a name for the employee."
            }
            return true
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the employee's id?",
        validate(answer) {
            if(!answer) {
                return "please provide an id for the employee."
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?", 
        validate(answer) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(answer)) {
                return "please provide a valid email address for the employee."
            }
            return true
        }
    },
// option to designate employee as intern, engineer, manager
    {
        type: 'list',
        name: 'role',
        message: 'Which role does this employee have?',
        choices: ['intern', 'engineer', 'manager']
    },

// if manager include office number
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: (answers) => answers.role === 'manager',
        validate(answer) {
            if(!answer) {
                return "please provide an office number for the manager."
            }
            return true
        }
    },

// if engineer include github username
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
        when: (answers) => answers.role === 'engineer',
        validate(answer) {
            if(!answer) {
        return "Please provide the engineer's github username."
            }
            return true
            }
    },

    // if intern include school name
    {
        type: 'input',
        name: 'school',
        message: "Which school does the intern attend?",
        when: (answers) => answers.role === 'intern',
        validate(answer) {
            if(!answer) {
                return "Please provide the intern's school name."
            }
            return true
        }
    },
    {
        type: 'confirm',
        name: 'anotherEmployee',
        message: 'Would you like to add another team member?',
        default: true
    }
])
.then((answers) => {
    if(answers.role) {
        switch (answers.role) {
            case "manager":
                const manager = new Manager(answers);
                employeesArray.push(manager);
                break;
            case "engineer":
                const engineer = new Engineer(answers);
                employeesArray.push(engineer);
                break;
            case "intern":
                const intern = new Intern(answers);
                employeesArray.push(intern);        
        }
    }
}).then((anotherEmployee) => {
    if(anotherEmployee) {
        return employeeQuestions(employeesArray);
    } else {
        return generateFile(employeesArray);
    }
})
.catch((error) => {
    if(error) throw error
})
};

employeeQuestions();


// use fs write file to generate index.html page
function generateFile() {
    fs.writeFile('/dist/team.html', generateTeam(employeesArray), err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("The team profile has been created and can be viewed in file team.html");
        }
    });
};
