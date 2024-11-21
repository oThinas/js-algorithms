import { isPowerOfTwo } from '../../../algorithms/math/is-power-of-two';

describe('Is power of 2', () => {
  it('should return true if the number is power of 2', () => {
    const expected = true;
    const received = isPowerOfTwo(32);

    expect(received).toBe(expected);
  });

  it('should return false if the number is not power of 2', () => {
    const expected = false;
    const received = isPowerOfTwo(33);

    expect(received).toBe(expected);
  });

  it('should return false if the number is less than 0', () => {
    const expected = false;
    const received = isPowerOfTwo(-2);

    expect(received).toBe(expected);
  });
});
