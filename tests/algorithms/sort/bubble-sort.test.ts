import { bubbleSort } from '../../../algorithms/sort/bubble-sort';

const arr = [-6, 20, 8, -2, 4];

describe('Bubble sort', () => {
  it('should sort an array', () => {
    const expected = [...arr].sort((a, b) => a - b);
    const received = bubbleSort([...arr]);

    expect(received).toEqual(expected);
  });
});
