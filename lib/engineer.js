const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, email, ID, github) {
    super(name, email, ID);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
