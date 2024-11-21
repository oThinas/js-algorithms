import { recursiveBinarySearch } from '../../../../algorithms/search/binary/recusrive-binary-search';

const arr = [-5, 2, 4, 6, 10];

describe('Recursive Binary search', () => {
  it('should return the index of an element of the list 1', () => {
    const target = 10;
    const expected = arr.findIndex((num) => num === target);
    const received = recursiveBinarySearch(arr, target);

    expect(received).toBe(expected);
  });

  it('should return the index of an element of the list 2', () => {
    const target = 2;
    const expected = arr.findIndex((num) => num === target);
    const received = recursiveBinarySearch(arr, target);

    expect(received).toBe(expected);
  });

  it('should return -1 if an element is not found on the list', () => {
    const target = 20;
    const expected = arr.findIndex((num) => num === target);
    const received = recursiveBinarySearch(arr, target);

    expect(received).toBe(expected);
  });
});