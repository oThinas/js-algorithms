import { fibonacci } from '../../../algorithms/math/fibonacci';
import { fibonacciIndex } from '../../../algorithms/math/fibonacci-index';

const fibonacciSequence = fibonacci(10);

describe('Fibonacci index', () => {
  it('should return the value of the Nth index of a fibonacci sequence', () => {
    const expected = fibonacciSequence[6];
    const received = fibonacciIndex(6);

    expect(received).toBe(expected);
  });

  it('should throw an error if the index is negative', () => {
    expect(() => fibonacciIndex(-1)).toThrow('Index must be a positive integer number');
  });
});