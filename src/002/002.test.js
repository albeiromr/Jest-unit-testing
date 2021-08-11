const data = require("./002").data;

test("when adding a new property it appears in its object", () => {
    data.two =  2
    expect(data).toEqual({one: 1, two: 2});
});