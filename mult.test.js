const mult = require('./mult');

test('mult anything to 0 is 0', () => {
	expect(mult(10, 0)).toBe(0);
});
