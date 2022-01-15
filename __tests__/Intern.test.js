const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Intern class"),
      () => {
        const obj = new Intern();

        expect(obj).toBeInstanceOf(Intern);
      };
  });
});
