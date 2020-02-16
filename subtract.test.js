const subtract = require('./sub');

test('subtract 0 from anything and get the same number back', () => {
	expect(subtract(10, 0)).toBe(10);
});
