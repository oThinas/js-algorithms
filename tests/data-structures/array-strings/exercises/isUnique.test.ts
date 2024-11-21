import { isUnique } from '../../../../data-structures/array-strings/exercises/isUnique';

describe('isUnique', () => {
  it('should return true if string has unique characters', () => {
    const str = 'abcdefg';

    const result = isUnique(str);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if string has repeated characters 1', () => {
    const str = 'abcdefga';

    const result = isUnique(str);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if string has repeated characters 2', () => {
    const str = 'abcdefgabc'.repeat(13);

    const result = isUnique(str);
    const expected = false;

    expect(result).toBe(expected);
  });
});