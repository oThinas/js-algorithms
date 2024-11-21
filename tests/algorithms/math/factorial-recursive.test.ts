import { factorialRecursive } from '../../../algorithms/math/factorial-recursive';

describe('Facotrial recursive', () => {
  it('should return the factorial of a number', () => {
    const expected = 24;
    const received = factorialRecursive(4);

    expect(received).toBe(expected);
  });

  it('should return the factorial of 1', () => {
    const expected = 1;
    const received = factorialRecursive(1);

    expect(received).toBe(expected);
  });
});