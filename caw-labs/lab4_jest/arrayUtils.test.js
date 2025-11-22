// arrayUtils.test.js
const { first, last, chunk } = require('./arrayUtils');

describe('first', () => {
  test('null ou n <= 0', () => {
    expect(first(null, 5)).toEqual([]);
    expect(first([], 0)).toEqual([]);
    expect(first([1,2,3], -1)).toEqual([]);
  });
  test('n null', () => expect(first([1,2,3])).toBe(1));
  test('n éléments', () => expect(first([1,2,3,4], 2)).toEqual([1,2]));
});

describe('last', () => {
  test('null', () => expect(last(null, 5)).toEqual([]));
  test('n null', () => expect(last([1,2,3])).toBe(3));
  test('n éléments', () => expect(last([1,2,3,4], 2)).toEqual([3,4]));
});

describe('concaténation', () => {
  const arr = ["Red", "Green", "White", "Black"];
  test('toString', () => expect(arr.toString()).toBe("Red,Green,White,Black"));
  test('join', () => expect(arr.join()).toBe("Red,Green,White,Black"));
  test('join("")', () => expect(arr.join('')).toBe("RedGreenWhiteBlack"));
});

describe('chunk', () => {
  test('normal', () => {
    expect(chunk([1,2,3,4,5,6], 2)).toEqual([[1,2],[3,4],[5,6]]);
  });
  test('size > length', () => {
    expect(chunk([1,2,3], 5)).toEqual([[1,2,3]]);
  });
  test('size <= 0', () => {
    expect(chunk([1,2,3], 0)).toEqual([]);
  });
});