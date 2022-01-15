const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Instanceable", () => {
    it("Should return a new instance of the Employee class", () => {
      const obj = new Employee();

      expect(obj).toBeInstanceOf(Employee);
    });
  });
  describe("name", () => {
    it("Should return the employees name", () => {
      const testEmployee = new Employee(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14"
      );

      expect(testEmployee.getName()).toEqual("Matthew");
    });
  });
  describe("email", () => {
    it("Should return the employees email", () => {
      const testEmployee = new Employee(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14"
      );

      expect(testEmployee.getEmail()).toEqual("mattwilliamsdev@gmail.com");
    });
  });
  describe("ID", () => {
    it("Should return the employees ID", () => {
      const testEmployee = new Employee(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14"
      );

      expect(testEmployee.getID()).toEqual("14");
    });
  });
});
