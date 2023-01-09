const inquirer = require("inquirer"); 
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


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
            { 
                type: "list", 
                name: "employeeType", 
                message: "Would you like to add an intern or engineer?",
                choices: ["Enginner", new inquirer.Separator(), "Intern", new inquirer.Separator(),  "Finish Building Team"],
                
            }
        ])
        .then((name, id, email, officenumber, employeeType) => { 
            let manager = new Manager(name, id, email, officenumber); 
            writeHTML(); 
            if (employeeType === "Engineer") { 
                inquirer
                    .prompt([
                        { 
                            type: input, 
                            message: "What is your Engineer's name?", 
                            name: "engineername", 

                        },
                    
                        { 
                            type: input, 
                            message: "Enter Git Hub username", 
                            name: "github" 
                        }, 

                        { 
                            type: input, 
                            message: "Enter engineer's ID number", 
                            name: "engineerid",
                        }, 
                        { 
                            type: input, 
                            message: "Enter engineer's email", 
                            name: "engineeremail"
                        },
                        
                     

                ])
                .then((engineername, github, engineerid, engineeremail) => { 
                    let engineer = new Engineer (engineername, github, engineerid, engineeremail); 
                    addHTML();
                }
                ) 
            } else if (employeeType === "Intern") { 
                inquirer
                    .prompt([
                        { 
                            type: input, 
                            message: "What is your Intern's name?", 
                            name: "internname", 

                        },
                    
                        { 
                            type: input, 
                            message: "What school does the intern attend?", 
                            name: "school" 
                        }, 

                        { 
                            type: input, 
                            message: "Enter intern's ID number", 
                            name: "internid",
                        }, 
                        { 
                            type: input, 
                            message: "Enter intern's email", 
                            name: "internemail"
                        },
                        
                     

                ])
                .then((internname, internid, internemail, school) => { 
                    let intern = new Intern (internname, internid, internemail, school)
                    addIntHTML();
                }) 
            } else (employeeType === "Finish"); { 
                console.log ("Page is complete!")  
            }; 
        })
}; 

askQ(); 
function writeHTML () { 
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>Team Profile</title>
    
    </head>
    <body> 
        <header class = "section"> 
            <a class="title">My Team</a> 
        </header> 
        <section class="card"> 
        <h5>${name}</h5> 
        <h4>Team Manager</h4>
        <ul> 
            <li>${id}</li>
            <li>${email}</li> 
            <li>${officenumber}</li>
        </ul>
    </section>
    
        
    </body>
    </html>` 
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    })
}; 

function addEngHTML () { 
    const engHTML = `<section class="card"> 
    <h5>${name}</h5> 
    <h4>${employeeType}</h4>
    <ul> 
        <li>${id}</li>
        <li>${email}</li> 
        <li>${github}</li>
    </ul> 

    </section>` 
    fs.appendFile("./output/team.html", engHTML, function (err) {
        if (err) {
            return reject(err);
        };
    });
}; 

function addIntHTML () { 
    const intHTML = `<section class="card"> 
    <h5>${name}</h5> 
    <h4>${employeeType}</h4>
    <ul> 
        <li>${id}</li>
        <li>${email}</li> 
        <li>${school}</li>
    </ul> 

    </section>` 
    fs.appendFile("./output/team.html", engHTML, function (err) {
        if (err) {
            return reject(err);
        };
    });
}