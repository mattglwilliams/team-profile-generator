const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Manager class", () => {
      const obj = new Manager();

      expect(obj).toBeInstanceOf(Manager);
    });
  });
  describe("phone", () => {
    it("Should return the managers phone number", () => {
      const testManager = new Manager(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14",
        "07123456789"
      );

      expect(testManager.getPhoneNumber()).toEqual("07123456789");
    });
  });
  describe("role", () => {
    it("Should return the managers role", () => {
      const testManager = new Manager();

      expect(testManager.getRole()).toEqual("Manager");
    });
  });
});
