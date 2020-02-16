const mult = require('./mult');

test('mult 10 and 10 to get 100', () => {
	expect(mult(10, 10)).toBe(100);
});

test('mult anything to 0 is 0', () => {
	expect(mult(10, 0)).toBe(0);
});
