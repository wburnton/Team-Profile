const Engineer = require("../lib/Engineer"); 

describe ("Engineer", () => { 
    it("should do return a github property", () => { 
        //arrange  
        const employee = new Engineer ("Guy", 1, "guy@gmail.com", "guygithub");
        expect(employee.getGithub()).toBe("guygithub") 
    });
    
    it("should return a role property", () => { 
        const employee = new Engineer ("Guy", 1, "guy@gmail.com", "guygithub");
        expect(employee.getRole()).toBe("Engineer") 
    });
});

