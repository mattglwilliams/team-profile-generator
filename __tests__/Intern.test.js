const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Intern class", () => {
      const obj = new Intern();

      expect(obj).toBeInstanceOf(Intern);
    });
  });
  describe("school", () => {
    it("Should return the intern school", () => {
      const testIntern = new Intern(
        "Matthew",
        "mattwilliamsdev@gmail.com",
        "14",
        "UoM"
      );

      expect(testIntern.getSchool()).toEqual("UoM");
    });
  });
  describe("role", () => {
    it("Should return the intern role", () => {
      const testIntern = new Intern();

      expect(testIntern.getRole()).toEqual("Intern");
    });
  });
});
