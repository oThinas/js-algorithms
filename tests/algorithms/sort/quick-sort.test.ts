import { quickSort } from '../../../algorithms/sort/quick-sort';

const arr = [-6, 20, 8, -2, 4];

describe('Quick sort', () => {
  it('should sort an array', () => {
    const expected = [...arr].sort((a, b) => a - b);
    const received = quickSort([...arr]);

    expect(received).toEqual(expected);
  });
});
