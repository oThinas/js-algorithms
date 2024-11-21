import { factorial } from '../../../algorithms/math/factorial';

describe('Factorial', () => {
  it('should return the factorial of a number', () => {
    const expected = 24;
    const result = factorial(4);

    expect(result).toBe(expected);
  });

  it('should return the factorial of 0', () => {
    const expected = 1;
    const result = factorial(0);

    expect(result).toBe(expected);
  });
});
