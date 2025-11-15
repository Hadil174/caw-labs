// notation.test.js
const { mean } = require('./notation');

test('mean returns correct average', () => {
  expect(mean([90, 85, 88, 92, 87])).toBe(88.4);
  expect(mean([70, 75, 80])).toBe(75);
  expect(mean([])).toBe(0);
  expect(mean([10])).toBe(10);
});

test('mean handles invalid input', () => {
  expect(mean(null)).toBe(0);
  expect(mean("abc")).toBe(0);
});