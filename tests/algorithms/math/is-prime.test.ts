import { isPrime } from '../../../algorithms/math/is-prime';

describe('Is prime', () => {
  it('should return true if the input is a prime number', () => {
    const expected = true;
    const received = isPrime(5);

    expect(received).toBe(expected);
  });

  it('should return false if the input is not a prime number', () => {
    const expected = false;
    const received = isPrime(4);

    expect(received).toBe(expected);
  });

  it('should return false if the input is less than 2', () => {
    const expected = false;
    const received = isPrime(0);

    expect(received).toBe(expected);
  });
});
