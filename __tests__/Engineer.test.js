const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Engineer class"),
      () => {
        const obj = new Engineer();

        expect(obj).toBeInstanceOf(Engineer);
      };
  });
});
