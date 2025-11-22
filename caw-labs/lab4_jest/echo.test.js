// echo.test.js
const { exf } = require('./echo');

global.console = { log: jest.fn() };

describe('exf', () => {
  beforeEach(() => {
    console.log.mockClear();
  });

  test('prints string n times', () => {
    exf("hello", 3);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith("hello");
  });

  test('n = 0 → no output', () => {
    exf("test", 0);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('n = 1 → one output', () => {
    exf("JS from server", 1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("JS from server");
  });

  test('negative n → no output', () => {
    exf("error", -5);
    expect(console.log).not.toHaveBeenCalled();
  });
});