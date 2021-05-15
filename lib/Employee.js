// Parent class of all other types
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
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
        return this.role;
    }

}
module.exports = Employee;