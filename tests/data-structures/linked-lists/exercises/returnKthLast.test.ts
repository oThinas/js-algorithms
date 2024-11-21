import { returnKthLast } from '../../../../data-structures/linked-lists/exercises/returnKthLast';
import { fromArray, toArray } from '../../../../data-structures/linked-lists/linkedList';

describe('returnKthLast', () => {
  it('should return the kth last element of a linked list', () => {
    const head = fromArray([1, 2, 3, 4, 5]);
    const k = 2;

    const result = returnKthLast(head, k);
    const expected = fromArray([4, 5]);

    expect(toArray(result)).toEqual(toArray(expected));
  });
});
