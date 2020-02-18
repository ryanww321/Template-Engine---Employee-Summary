const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super(name, id, title);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern;
    }
}

module.exports = Intern;