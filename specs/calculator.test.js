const { add, subtract, multiply, divide } = require('../lib');

test('The add function should return 1 + 1 equals 2', () => {
  expect(add(1, 1)).toBe(2);
});

test('The subtracts function should return 5 - 1 equals 4', () => {
  expect(subtract(5, 1)).toBe(4);
});

test('The multiply function should return 10 * 10 equals 100', () => {
  expect(multiply(10, 10)).toBe(100);
});

test('The divide function should return 100/2 equals 50', () => {
  expect(divide(100, 2)).toBe(50);
});

test('Input is number', () => {
  expect(typeof add(110, 200)).toBe('number');
});
