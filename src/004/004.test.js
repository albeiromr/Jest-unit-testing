const sume = require("./004").sume;

test("one number plus other one", () => {
    expect(sume(8, 9)).toBeGreaterThan(16);
    expect(sume(-4, -2)).toBeLessThan(0);
    expect(sume(-4, -2)).toBe(-6);
    expect(sume(56, 56)).toBeGreaterThanOrEqual(112);
});

test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});