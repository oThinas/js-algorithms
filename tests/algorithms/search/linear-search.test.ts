import { linearSearch } from '../../../algorithms/search/linear-search';

const arr = [-5, 2, 10, 4, 6];

describe('Linear search', () => {
  it('should return the index of an element of the list', () => {
    const target = 10;
    const expected = arr.findIndex((num) => num === target);
    const received = linearSearch(arr, target);

    expect(received).toBe(expected);
  });

  it('should return -1 if an element is not found on the list', () => {
    const target = 20;
    const expected = arr.findIndex((num) => num === target);
    const received = linearSearch(arr, target);

    expect(received).toBe(expected);
  });
});