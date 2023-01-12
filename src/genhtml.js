const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager"); 


 
const html = ({Manager}) =>`<!DOCTYPE html>
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
        <h5>${Manager.name}</h5> 
        <h4>Team Manager</h4>
        <ul> 
            <li>${Manager.id}</li>
            <li>${Manager.email}</li> 
            <li>${Manager.officenumber}</li>
        </ul>
    </section>
    
        
    </body>
    </html>` 
     

 
const engHTML = ({ Engineer }) => `<section class="card"> 
    <h5>${Engineer.engineername}</h5> 
    <h4>Engineer</h4>
    <ul> 
        <li>${Engineer.engineerid}</li>
        <li>${Engineer.engineeremail}</li> 
        <li>${Engineer.github}</li>
    </ul> 

    </section>` 
    //fs.appendFile("./output/team.html", engHTML, function (err) {
        //if (err) {
            //return reject(err);
        //};
    
 


const intHTML = ({ Intern}) =>`<section class="card"> 
    <h5>${Intern.internname}</h5> 
    <h4>Intern</h4>
    <ul> 
        <li>${Intern.internid}</li>
        <li>${Intern.internemail}</li> 
        <li>${Intern.school}</li>
    </ul> 

    </section>` 
    // fs.appendFile("./output/team.html", engHTML, function (err) {
    //     if (err) {
    //         return reject(err);
    //     };
    // }); 

module.exports = genhtml; 