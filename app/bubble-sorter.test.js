'use strict';

const { objectToString } = require('../lib/object-to-string');

describe('BubbleSorter', () => {
  it('BubbleSorter\'s factory method works', () => {
    const bubbleSorter = require('./bubble-sorter')();

    expect(bubbleSorter.constructor.name).toBe('BubbleSorter');
  });

  describe('BubbleSorter.bubbleSort()', () => {
    [
      { input: [ 6, 7, 4, 8, 9, 1, 2, 3, 5 ], expected: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] },
      { input: [ 1, 3, 5, 7, 9, 0, 2, 4, 6, 8 ], expected: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] },
      { input: [ 80, 70, 60, 50, 44, 47, 32, 12, 0 ], expected: [ 0, 12, 32, 44, 47, 50, 60, 70, 80 ] },
    ].forEach(({ input, expected }) => {
      it(`bubbleSort(${objectToString(input)}) returns ${objectToString(expected)}`, () => {
        const bubbleSorter = require('./bubble-sorter')();
        const actual = bubbleSorter.bubbleSort(input);

        expect(actual).toEqual(expected);
      });
    });
  });
});
