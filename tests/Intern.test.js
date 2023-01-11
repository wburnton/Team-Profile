const Intern = require("../lib/Intern"); 

describe ("Intern", () => { 
    it("should return a school property", () => { 
        //arrange  
        const employee = new Intern ("Guy", 1, "guy@gmail.com", "Guy University");
        expect(employee.getSchool()).toBe("Guy University") 
    });
    
    it("should return correct role property", () => { 
        const employee = new Intern ("Guy", 1, "guy@gmail.com","Guy University");
        expect(employee.getRole()).toBe("Intern") 
    });
});