const Employee = require("../lib/employee");

describe ("Employee", () => { 
    it("should do return a name property", () => {   
        const employee = new Employee ("Guy", 1, "guy@gmail.com");
        expect(employee.getName()).toBe("Guy") 
    });
    it("should return a number property for ID", () => { 
        const employee = new Employee ("Guy", 1, "guy@gmail.com");
        expect(employee.getId()).toBe(1) 
    }); 
    it("should return an email property", () => { 
        const employee = new Employee ("Guy", 1, "guy@gmail.com");
        expect(employee.getEmail()).toBe("guy@gmail.com")
    }); 
    it("should return a role property", () => { 
        const employee = new Employee ("Guy", 1, "guy@gmail.com");
        expect(employee.getRole()).toBe("Employee") 
    });
});