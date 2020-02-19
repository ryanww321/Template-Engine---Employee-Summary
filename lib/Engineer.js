const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title);
        this.github = github;
    }

    getGithub() {
        return this.gitHub
    }

    getRole() {
        return Engineer;
}
}

module.exports = Engineer;