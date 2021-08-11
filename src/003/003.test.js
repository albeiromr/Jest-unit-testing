test("null", () => {
  const n = null;
  expect(n).toBe(null);
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
  expect(n).toBeDefined();
});

test("true", () => {
  const h = true;
  expect(h).toBe(true);
  expect(h).not.toBeFalsy();
  expect(h).toBeDefined();
  expect(h).toBeTruthy();
});

test("zero", () => {
  const z = 0;
  const m = undefined;
  expect(z).toBeDefined();
  expect(m).not.toBeDefined();
  expect(m).not.toBeTruthy();
  expect(m).toBeFalsy();
});
