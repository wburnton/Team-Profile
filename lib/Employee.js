const inquirer = require("inquirer"); 

class Employee { 
    constructor(name,id,email){ 
        this.name = name 
        this.id = id 
        this.email = email
    }  
     

    askQ() { 
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
            .then((employeeType) => { 
                addManager();
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
                    .then() 
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
                    .then() 
                } else (employeeType === "Finish"); { 
                    generateHTML();  
                }; 
            })
    }; 
    getName() { 

    }

    getId() { 

    } 

    getRole() 
}