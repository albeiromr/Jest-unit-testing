const verifyMonth =  require("./007").verifyMonth;

test("if month is july it says that it´s ok", () => {
    expect(verifyMonth("july")).toMatch(/Is the same month/);
}); 

test("if month is not july it says that month is wrong", () => {
    expect(() => verifyMonth("march")).toThrow(/Error, el mes es incorrecto/);
});

