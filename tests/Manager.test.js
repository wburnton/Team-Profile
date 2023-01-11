const Manager = require("../lib/Manager"); 

describe ("Manager", () => { 
    it("should return an office number property", () => { 
        //arrange  
        const employee = new Manager ("Guy", 1, "guy@gmail.com", "123-456-7890");
        expect(employee.getOfficenumber()).toBe("123-456-7890") 
    });
    
    it("should return correct role property", () => { 
        const employee = new Manager ("Guy", 1, "guy@gmail.com","123-456-7890");
        expect(employee.getRole()).toBe("Manager") 
    });
});