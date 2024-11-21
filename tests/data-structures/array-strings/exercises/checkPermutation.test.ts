import { checkPermutation } from '../../../../data-structures/array-strings/exercises/checkPermutation';

describe('checkPermutation', () => {
  it('should return true if one string is a permutation of the other 1', () => {
    const str1 = 'abc';
    const str2 = 'bca';

    const result = checkPermutation(str1, str2);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if one string is a permutation of the other 2', () => {
    const str1 = 'argentino';
    const str2 = 'ignorante';

    const result = checkPermutation(str1, str2);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if one string is not a permutation of the other', () => {
    const str1 = 'abc';
    const str2 = 'def';

    const result = checkPermutation(str1, str2);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if one string is longer than other', () => {
    const str1 = 'abc';
    const str2 = 'asdasd';

    const result = checkPermutation(str1, str2);
    const expected = false;

    expect(result).toBe(expected);
  });
});
