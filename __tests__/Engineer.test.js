const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Initialization", () => {
        it ("should return an employee object with a name property when called with the 'new' keyword and matching the value passed in", () => {
            const expectedName = "bob";
            const expectedId = 1;
            const expectedEmail = "bob@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);
            
            expect(employee.name).toEqual(expectedName);
        });

        it ("should return an employee object with an id property when called with the 'new' keyword and matching the value passed in", () => {
            const expectedName = "bob";
            const expectedId = 1;
            const expectedEmail = "bob@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);

            expect(employee.id).toEqual(expectedId);
        });

        it ("should return an employee object with an email property when called with the 'new' keyword and matching the value passed in", () => {
            const expectedName = "bob";
            const expectedId = 1;
            const expectedEmail = "bob@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);

            expect(employee.email).toEqual(expectedEmail);
        });
    });

    describe("Accessors", () => {
        it ("should return the Engineer's name when getName function is called", () => {
            const expectedName = "Anne";
            const expectedId = 2;
            const expectedEmail = "anne@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);
            

            expect(employee.getName()).toEqual(expectedName);
        });

        it ("should return the Engineer's id when getId function is called", () => {
            const expectedName = "Anne";
            const expectedId = 2;
            const expectedEmail = "anne@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);
            

            expect(employee.getId()).toEqual(expectedId);
        });

        it ("should return the Engineer's email when getEmail function is called", () => {
            const expectedName = "Anne";
            const expectedId = 2;
            const expectedEmail = "anne@gmail.com";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);
            

            expect(employee.getEmail()).toEqual(expectedEmail);
        });

        it ("should return the Engineer's role when getRole function is called", () => {
            const expectedName = "Cal";
            const expectedId = 3;
            const expectedEmail = "cal@gmail.com";
            const expectedRole = "Engineer";
            const employee = new Engineer(expectedName, expectedId, expectedEmail);
            

            expect(employee.getRole()).toEqual(expectedRole);
        });

        it ("should return the Engineer's github when getGithub function is called", () => {
            const expectedName = "Cal";
            const expectedId = 3;
            const expectedEmail = "cal@gmail.com";
            const expectedRole = "Engineer";
            const expectedGithub = "devCal"
            const employee = new Engineer(expectedName, expectedId, expectedEmail, expectedGithub);
            

            expect(employee.getGithub()).toEqual(expectedGithub);
        });
    });
});