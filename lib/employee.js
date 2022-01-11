class Employee {
  constructor(name, email, ID) {
    this.name = name;
    this.email = email;
    this.id = ID;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getID() {
    return this.id;
  }
}

module.exports = Employee;
