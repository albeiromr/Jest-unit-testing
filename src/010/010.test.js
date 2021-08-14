const forEvery = (objectArray, callback) => {
  for (let i = 0; i < objectArray.length; i++) {
    callback(objectArray[i]);
  }
};

//mock function
const mockCallback = jest.fn(x => {return 42 + x});

forEvery([0, 1, 2], mockCallback);

//printing in console the mockCallback calls results, kind off a repport
console.log(mockCallback.mock);



test("calls length must be 3", () => {
    expect(mockCallback.mock.calls.length).toBe(3);
});

test("callback´s second call paramether is 1", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test("callback´s third call paramether is 2", () => {
    expect(mockCallback.mock.calls[2][0]).toBe(2);
});

test("callback´s first result must be 42", () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
});

