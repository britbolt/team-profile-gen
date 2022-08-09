 

// start of manager prompts 
const addManager = async () => {
    const managerInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput_1 => {
                if (nameInput_1) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput_3 => {
                if (isNaN(nameInput_3)) {
                    console.log("Please enter the manager's ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email_1 => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_1);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput_5 => {
                if (isNaN(nameInput_5)) {
                    console.log('Please enter an office number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]);
    const { name, id, email: email_2, officeNumber } = managerInput;
    const manager = new man(name, id, email_2, officeNumber);
    teamArray.push(manager);
    console.log(manager);
};

// prompts to add an employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'emp_name',
            message: 'What is the employee name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees email address?',
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('please provide a valid email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's github!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
     .then(({ employeeInput }) => {
           const { emp_name, role, id, email, school } = employeeInput;
           const employee = employee;
            
           if (role === "Engineer") {
            employee = new Engineer (emp_name, id, email, github)
            console.log(employee);

           } else if (role === "Intern") {
            employee = new Intern (emp_name, id, email, school)
            console.log(employee);
           }
           teamArray.push(employee);

           if (confirmaAddEmployee) {
            return addEmployee(teamArray);
           } else {
            return teamArray;
           }
        })
    };

    // function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return createPage(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });