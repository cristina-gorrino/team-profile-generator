// Parent class of all other types
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
// Will be overridden by subclasses
    getRole() {
        this.role ="Employee";
        return this.role;
    }

}
module.exports = Employee;