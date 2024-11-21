import { insertionSort } from '../../../algorithms/sort/insertion-sort';

const arr = [-6, 20, 8, -2, 4];

describe('Insertion sort', () => {
  it('should sort an array', () => {
    const expected = [...arr].sort((a, b) => a - b);
    const received = insertionSort([...arr]);

    expect(received).toEqual(expected);
  });
});
