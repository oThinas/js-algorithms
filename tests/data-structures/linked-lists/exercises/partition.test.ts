import { partition } from '../../../../data-structures/linked-lists/exercises/partition';
import { fromArray, toArray } from '../../../../data-structures/linked-lists/linkedList';

describe('partition', () => {
  it('should return a linked list with nodes partitioned around the given value', () => {
    const head = fromArray([3, 5, 8, 5, 10, 2, 1]);
    const target = 5;
    const partitioned = toArray(partition(head, target));

    let isPartitioned = true;
    let isLessThan = true;
    for (let i = 0; i < partitioned.length; i++) {
      if (partitioned[i] >= target) {
        isLessThan = false;
      }

      if (!isLessThan && partitioned[i] < target) {
        isPartitioned = false;
      }
    }

    expect(isPartitioned).toBe(true);
  });
});
