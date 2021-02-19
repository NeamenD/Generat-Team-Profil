 
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");


async function promptUser(answers) {
        const res = await inquirer.prompt([
            {
                type: "list",
                name: "Jared",
                message: "what is your role?",
                choices: ["Engineer", "Intern", "Manager"]
            },
        ]);
        // should use switch case instead of if/else starting here
        console.log(res);
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "Alec",
                    message: "What is your name?",
                    type: "input"
                
                },
                
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
            ]).then(function (engineerRes) {
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, engineerRes.github);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newEngineer);
                // run promptUser (called recursion) so that you can add multiple Engineers and id changes incrementally
                teamArray.push(newEngineer);
                addUser();

            });
            

        } else if (res.role === "Intern") {
            inquirer.prompt([
                {
                    name: "john",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
            ]).then(function (internRes) {
                var newIntern = new Intern(internRes.name, internRes.email, uniqueId, internRes.school);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newIntern);
                teamArray.push(newIntern);
                addUser();
            });
        } else if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "Jared",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
            ]).then(function (managerRes) {
                var newManager = new Manager(managerRes.name, managerRes.email, uniqueId, managerRes.office);
                uniqueId = uniqueId + 1;
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
            });
        };
    
        

};