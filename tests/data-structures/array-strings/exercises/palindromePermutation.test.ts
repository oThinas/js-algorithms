import { palindromePermutation } from '../../../../data-structures/array-strings/exercises/palindromePermutation';

describe('palindromePermutation', () => {
  it('should return true if a string is a permutation of a palindrome', () => {
    const str = 'Tact Coa';

    const result = palindromePermutation(str);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if a string is not a permutation of a palindrome', () => {
    const str = 'This is not a palindrome permutation';

    const result = palindromePermutation(str);
    const expected = false;

    expect(result).toBe(expected);
  });
});
