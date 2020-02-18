const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return Manager;
}
}

module.exports = Manager;