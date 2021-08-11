const nameString = "andru dexter"

test("the name contains some words", () => {
    expect(nameString).toMatch(/andru dexter/);
});