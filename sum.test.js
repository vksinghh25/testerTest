const sum = require('./sum');

test('adds -1 and -9 to equal -10', () => {
  expect(sum(-1, -9)).toBe(-10);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
