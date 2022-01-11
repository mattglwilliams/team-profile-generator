const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, ID, phoneNumber) {
    super(name, email, ID);
    this.phoneNumber = phoneNumber;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
