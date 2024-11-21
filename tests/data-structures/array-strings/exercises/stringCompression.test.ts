import { stringCompression } from '../../../../data-structures/array-strings/exercises/stringCompression';

describe('stringCompression', () => {
  it('should compress a string and return the smallest string', () => {
    const str = 'aabcccccaaa';

    const result = stringCompression(str);
    const expected = 'a2b1c5a3';

    expect(result).toBe(expected);
  });

  it('should return the original string if the compressed string is not smaller', () => {
    const str = 'abc';

    const result = stringCompression(str);
    const expected = 'abc';

    expect(result).toBe(expected);
  });
});
