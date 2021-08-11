const sume = require("./001").sume;

test("the sume of 1 and 2 is 3", () => {
    expect(sume(1, 2)).toBe(3);
});

