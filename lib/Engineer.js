const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        // TODO: add functionality
    }

    getRole() {
        this.role = "Engineer";
        return this.role;
    }
}