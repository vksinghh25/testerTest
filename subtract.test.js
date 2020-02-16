const subtract = require('./sub');

test('subtract the same number from it and get 0 every time', () => {
	expect(subtract(1000, 1000)).toBe(0);
	expect(subtract(-123, -123)).toBe(0);
});

test('subtract 0 from anything and get the same number back', () => {
	expect(subtract(10, 0)).toBe(10);
});
