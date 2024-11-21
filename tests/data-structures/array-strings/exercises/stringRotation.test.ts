import { stringRotation } from '../../../../data-structures/array-strings/exercises/stringRotation';

describe('stringRotation', () => {
  it('should return true if str2 is a rotation of str1', () => {
    const str1 = 'waterbottle';
    const str2 = 'erbottlewat';

    const result = stringRotation(str1, str2);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if str2 is not a rotation of str1 1', () => {
    const str1 = 'waterbottle';
    const str2 = 'erbottlewaa';

    const result = stringRotation(str1, str2);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if str2 is not a rotation of str1 2', () => {
    const str1 = 'waterbottle';
    const str2 = 'a';

    const result = stringRotation(str1, str2);
    const expected = false;

    expect(result).toBe(expected);
  });
});
