const inquirer = require("inquirer"); 
const fs = require("fs"); 
//const genhtml = require("./src/genhtml")
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
                message: "What is your team manager name?",
            }, 
            { 
                type: "input",
                name: "id", 
                message: "What is your team manager's employee ID number?",

            }, 
            { 
                type: "input", 
                name: "email", 
                message: "What is your team manager's email?", 
            }, 
            { 
                type: "input", 
                name: "officenumber", 
                message: "What is your team manager's office number?", 
            },
            
        ])
        .then((answers) => { 
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber); 
            team.push(manager); 
            //console.log(answers.officenumber); 
            const htmlContent = writeHtml(manager); 
            fs.writeFile("./dist/team.html", htmlContent, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    })
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
                fs.appendFile("./dist/team.html", endHtml, function (err) {
                    if (err) {
                        return reject(err);
                    };
                });
                 
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
                    name: "name", 

                },
            
                { 
                    type: "input", 
                    message: "Enter Git Hub username", 
                    name: "github", 
                }, 

                { 
                    type: "input", 
                    message: "Enter engineer's ID number", 
                    name: "id",
                }, 
                { 
                    type: "input", 
                    message: "Enter engineer's email", 
                    name: "email",
                },
                
             

        ])
        .then((answers) => { 
            let engineer = new Engineer (answers.name, answers.github, answers.id, answers.email); 
            team.push(engineer); 
            const newEngHtml = engHTML(engineer); 
            fs.appendFile("./dist/team.html", newEngHtml, function (err) {
                if (err) {
                    return reject(err);
                };
            });
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
                    name: "name", 

                },
            
                { 
                    type: "input", 
                    message: "What school does the intern attend?", 
                    name: "school", 
                }, 

                { 
                    type: "input", 
                    message: "Enter intern's ID number", 
                    name: "id",
                }, 
                { 
                    type: "input", 
                    message: "Enter intern's email", 
                    name: "email",
                },
                
             

        ])
        .then((ans) => { 
            let intern = new Intern (ans.name, ans.id, ans.email, ans.school)
            team.push(intern); 
            const newIntHtml = intHTML(intern); 
            fs.appendFile("./dist/team.html", newIntHtml, function (err) {
                if (err) {
                    return reject(err);
                };
            });   
            newMember();

        }) 
    }; 




    const writeHtml = ({name, id, email, officenumber}) =>`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    
    </head>
    <body> 
    <div class="container">
    <div class="row">
        <header class = "section"> 
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav> 
        </header> 
        <section class="card mx-auto mb-3" style="width: 18rem"> 
        <h4 class= "card-header">${name}</h5> 
        <h5 class= "card-header"> Team Manager</h4>
        <ul class="list-group list-group-flush"> 
            <li class="list-group-item">ID:${id}</li>
            <li class="list-group-item">Email: <a href = mailto:${email}</li> 
            <li class="list-group-item">Office Number:${officenumber}</li>
        </ul>
    </section> 
    `
    
        
    // </body>
    // </html>` 
     

 
const engHTML = ({name, id, email, github}) => `<section class="card mx-auto mb-3" style="width: 18rem"> 
    <h4 class= "card-header">${name}</h5> 
    <h5 class= "card-header">Engineer</h4>
    <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">Email: <a href = mailto:${email}>${email}></li> 
        <li class="list-group-item">Github:${github}</li>
    </ul> 

    </section>` 
    
 


const intHTML = ({name, id, email, school}) =>`<section class="card mx-auto mb-3" style="width: 18rem"> 
    <h5 class= "card-header">${name}</h5> 
    <h4 class= "card-header">Intern</h4>
    <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">Email:<a href = mailto: ${email}>${email}></li> 
        <li class="list-group-item">School:${school}</li>
    </ul> 

    </section>` 
    


const endHtml = ` 
</div>
    </div>

</body>
 </html>`

 

askQ(); 

