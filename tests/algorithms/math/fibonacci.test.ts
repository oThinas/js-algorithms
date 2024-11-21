import { fibonacci } from '../../../algorithms/math/fibonacci';

describe('Fibonacci', () => {
  it('should return the first n numbers in the Fibonacci sequence', () => {
    const received = fibonacci(8);
    const expected = [0, 1, 1, 2, 3, 5, 8, 13];

    expect(received).toEqual(expected);
  });

  it('should return an empty array if the input is 0', () => {
    const received = fibonacci(0);
    const expected: number[] = [];

    expect(received).toEqual(expected);
  });
});
