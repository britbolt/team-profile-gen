// import npm packages 
import inquirer from 'inquirer';

// import classes 
import Manager from './lib/Manager.js';
// const manager = require('./lib/Manager.js');
// const intern = require('./lib/Intern.js');
// const engineer = require('./lib/Engineer.js');
// const employee = require('./lib/Employee.js');



// import html template 
// const template = require('./src/template.html');

// array for team to insert into template
const managerAnswers = [];

//  prompts to add a manager
const managerQuestions = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?", 
        validate(answer) {
            if(!answer) {
                return "please provide a name for the manager."
            }
            return true
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the manager's id?",
        validate(answer) {
            if(!answer) {
                return "please provide an id for the manager."
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?", 
        validate(answer) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(answer)) {
                return "please provide a valid email address for the manager."
            }
            return true
        }
    },
    {
        type: 'number',
        name: 'office number',
        message: "What is the manager's office number?",
        validate(answer) {
            if(!answer) {
                return "please provide an office number for the manager."
            }
            return true
        }
    },

])
.then((answers) => {
    console.log(answers);
    this.managerAnswers.push(new Manager(answers));
    
    console.log(managerAnswers);
})
.catch((error) => {
    if(error) throw error
})
};

managerQuestions();
// prompts to add an employee
// option to designate employee as intern or engineer
// if engineer include github
// if intern include school name
// use fs write file to generate index.html page
