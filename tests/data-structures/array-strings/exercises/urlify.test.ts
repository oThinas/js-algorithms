import { urlify } from '../../../../data-structures/array-strings/exercises/urlify';

describe('urlify', () => {
  it('should replace spaces with %20 in a string with leading and trailing spaces', () => {
    const input = 'Mr John Smith   ';

    const result = urlify(input);
    const expected = 'Mr%20John%20Smith';

    expect(result).toBe(expected);
  });

  it('should replace spaces with %20 in a string with multiples spaces between words', () => {
    const input = 'Mr  John  Smith';

    const result = urlify(input);
    const expected = 'Mr%20%20John%20%20Smith';

    expect(result).toBe(expected);
  });

  it('should return the same string if there are no spaces', () => {
    const input = 'MrJohnSmith';

    const result = urlify(input);
    const expected = input;

    expect(result).toBe(expected);
  });

  it('should return an empty string if the input is an empty string', () => {
    const input = '';

    const result = urlify(input);
    const expected = '';

    expect(result).toBe(expected);
  });

  it('should return an empty string if the input is a string with only spaces', () => {
    const input = '    ';

    const result = urlify(input);
    const expected = '';

    expect(result).toBe(expected);
  });
});
