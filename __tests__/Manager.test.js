const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should return a new instance of the Manager class"),
      () => {
        const obj = new Manager();

        expect(obj).toBeInstanceOf(Manager);
      };
  });
});
