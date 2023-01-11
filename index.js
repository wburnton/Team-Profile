const inquirer = require("inquirer"); 
const fs = require("fs"); 
const genhtml = require("./src/genhtml")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager"); 
const team = []; 


function askQ() { 
    inquirer 
        .prompt([ 
            { 
                type: "input", 
                name: "name", 
                message: "What is your team manager name?"
            }, 
            { 
                type: "input",
                name: "id", 
                message: "What is your team manager's employee ID number?",

            }, 
            { 
                type: "input", 
                name: "email", 
                message: "What is your team manager's email?" 
            }, 
            { 
                type: "input", 
                name: "officenumber", 
                message: "What is your team manager's office number?" 
            },
            
        ])
        .then((answers) => { 
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber); 
            team.push(manager); 
            console.log(answers.officenumber);
            newMember(); 
            
                 
            
            
        }) 
}; 

function newMember() { 
    inquirer
        .prompt([ 
            { 
                type: "list", 
                name: "employeeType", 
                message: "Would you like to add an intern or engineer?",
                choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator(),  "Finish Building Team"],
                
            } 
        ]) 
        .then((answers) => { 
            if (answers.employeeType === "Engineer") { 
                engineerAdd(); 
            } else if (answers.employeeType === "Intern") { 
                internAdd();  
            } else { 
                //console.log ("Page is complete!"); 
                writeHTML(team);
                 
            };
        })
    
   
}

/* intialize engineer prompts and html addition */

function engineerAdd() { 
        inquirer
            .prompt([
                { 
                    type: "input", 
                    message: "What is your Engineer's name?", 
                    name: "engineername", 

                },
            
                { 
                    type: "input", 
                    message: "Enter Git Hub username", 
                    name: "github" 
                }, 

                { 
                    type: "input", 
                    message: "Enter engineer's ID number", 
                    name: "engineerid",
                }, 
                { 
                    type: "input", 
                    message: "Enter engineer's email", 
                    name: "engineeremail"
                },
                
             

        ])
        .then((answers) => { 
            let engineer = new Engineer (answers.engineername, answers.github, answers.engineerid, answers.engineeremail); 
            team.push(engineer); 
            newMember();

        }
        ) 
    }; 

// intialize intern prompts and add html 
function internAdd () { 
        inquirer
            .prompt([
                { 
                    type: "input", 
                    message: "What is your Intern's name?", 
                    name: "internname", 

                },
            
                { 
                    type: "input", 
                    message: "What school does the intern attend?", 
                    name: "school" 
                }, 

                { 
                    type: "input", 
                    message: "Enter intern's ID number", 
                    name: "internid",
                }, 
                { 
                    type: "input", 
                    message: "Enter intern's email", 
                    name: "internemail"
                },
                
             

        ])
        .then((ans) => { 
            let intern = new Intern (ans.internname, ans.internid, ans.internemail, ans.school)
            team.push(intern);  
            newMember();

        }) 
    }; 

    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    })


 

askQ(); 

