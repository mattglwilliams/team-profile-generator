const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Engineer class", () => {
      const obj = new Engineer();

      expect(obj).toBeInstanceOf(Engineer);
    });
  });
  describe("github", () => {
    it("Should return the engineers github username", () => {
      const testEngineer = new Engineer(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14",
        "mattglwilliams"
      );

      expect(testEngineer.getGithub()).toEqual("mattglwilliams");
    });
  });
  describe("role", () => {
    it("Should return the engineers role", () => {
      const testEngineer = new Engineer();

      expect(testEngineer.getRole()).toEqual("Engineer");
    });
  });
});
