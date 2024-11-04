const { getss } = require("../c");

describe("getss function", () => {
  it("should return a JSON response with the welcome message", () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    getss(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Welcome to the" });
  });
});
