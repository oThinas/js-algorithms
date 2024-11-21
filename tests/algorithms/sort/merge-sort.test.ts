import { mergeSort } from '../../../algorithms/sort/merge-sort';

const arr = [-6, 20, 8, -2, 4];

describe('Merge sort', () => {
  it('should sort an array', () => {
    const expected = [...arr].sort((a, b) => a - b);
    const received = mergeSort([...arr]);

    expect(received).toEqual(expected);
  });
});
