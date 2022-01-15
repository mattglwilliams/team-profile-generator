const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Instanceable", () => {
    it("Should return a new instance of the Employee class"),
      () => {
        const obj = new Employee();

        expect(obj).toBeInstanceOf(Employee);
      };
  });
});
