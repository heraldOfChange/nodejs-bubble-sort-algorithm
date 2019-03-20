'use strict';

const isEmptyOrNull = (obj) => typeof obj === 'undefined' || obj === null || obj === '' || obj.length === 0;

class BubbleSorter {
  bubbleThrough(inputArray, window = 0) {
    if (isEmptyOrNull(inputArray[window + 1]))
      return inputArray;

    const first = inputArray[window];
    const second = inputArray[window + 1];

    inputArray.splice(window, 2);

    (first <= second) ?
      inputArray.splice(window, 0, [ first, second ]) :
      inputArray.splice(window, 0, [ second, first ]);

    return this.bubbleThrough(inputArray.flat(), window + 1);
  }

  bubbleSort(inputArray, remaining) {
    if (isEmptyOrNull(remaining))
      return this.bubbleSort(inputArray, inputArray.length);

    return (remaining > 0) ?
      this.bubbleSort(this.bubbleThrough(inputArray), remaining - 1) :
      inputArray;
  }
}

module.exports = () => new BubbleSorter();
