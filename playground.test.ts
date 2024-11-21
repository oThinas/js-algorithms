import { findOrder } from './playground';

describe('findOrder', () => {
  it('should return the correct order', () => {
    const result = findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    expect(result).toEqual([]);
  });
});
