import { oneStepAway } from '../../../../data-structures/array-strings/exercises/oneStepAway';

describe('oneStepAway', () => {
  it('should return true if two strings are one modification away 1', () => {
    const str1 = 'pale';
    const str2 = 'ple';

    const result = oneStepAway(str1, str2);
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true if two strings are one modification away 2', () => {
    const str1 = 'pales';
    const str2 = 'pale';

    const result = oneStepAway(str1, str2);
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return true if two strings are one modification away 3', () => {
    const str1 = 'pale';
    const str2 = 'bale';

    const result = oneStepAway(str1, str2);
    const expected = true;

    expect(result).toEqual(expected);
  });

  it('should return false if two strings are more than one modification away 1', () => {
    const str1 = 'pale';
    const str2 = 'brake';

    const result = oneStepAway(str1, str2);
    const expected = false;

    expect(result).toEqual(expected);
  });

  it('should return false if two strings are more than one modification away 2', () => {
    const str1 = 'pale';
    const str2 = 'pere';

    const result = oneStepAway(str1, str2);
    const expected = false;

    expect(result).toEqual(expected);
  });

  it('should return false if two strings are more than one modification away 2', () => {
    const str1 = 'pale';
    const str2 = 'p';

    const result = oneStepAway(str1, str2);
    const expected = false;

    expect(result).toEqual(expected);
  });
});
