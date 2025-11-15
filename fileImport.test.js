// fileImport.test.js
const { runDemo } = require('./fileImport');
const { mean } = require('./notation');

global.console = { log: jest.fn() };

jest.mock('./notation', () => ({
  mean: jest.fn()
}));

const mockedMean = require('./notation').mean;

describe('fileImport.js - runDemo', () => {
  beforeEach(() => {
    console.log.mockClear();
    mockedMean.mockClear();
    mockedMean.mockImplementation(arr =>
      arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
    );
  });

  test('calls mean 3 times and logs correctly', () => {
    runDemo();

    expect(mockedMean).toHaveBeenCalledTimes(3);
    expect(mockedMean).toHaveBeenCalledWith([90, 85, 88, 92, 87]);
    expect(mockedMean).toHaveBeenCalledWith([70, 75, 80]);
    expect(mockedMean).toHaveBeenCalledWith([]);

    // Maintenant 6 appels
    expect(console.log).toHaveBeenCalledTimes(6);
    expect(console.log).toHaveBeenCalledWith("Scores:", [90, 85, 88, 92, 87]);
    expect(console.log).toHaveBeenCalledWith("Average:", 88.4);
    expect(console.log).toHaveBeenCalledWith("Scores:", [70, 75, 80]);
    expect(console.log).toHaveBeenCalledWith("Average:", 75);
    expect(console.log).toHaveBeenCalledWith("Empty array average:", 0);
  });
});