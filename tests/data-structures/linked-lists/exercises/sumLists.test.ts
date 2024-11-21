import { sumLists } from '../../../../data-structures/linked-lists/exercises/sumLists';
import { fromArray, toArray } from '../../../../data-structures/linked-lists/linkedList';

describe('sumLists', () => {
  it('should return the sum of the digits of two linked lists: 1', () => {
    const l1 = fromArray([7, 1, 6]);
    const l2 = fromArray([5, 9, 2]);

    const result = sumLists(l1, l2);
    const expected = fromArray([2, 1, 9]);

    expect(toArray(result)).toEqual(toArray(expected));
  });

  it('should return the sum of the digits of two linked lists: 2', () => {
    const l1 = fromArray([7, 1, 6, 1]);
    const l2 = fromArray([5, 9, 2]);

    const result = sumLists(l1, l2);
    const expected = fromArray([2, 1, 9, 1]);

    expect(toArray(result)).toEqual(toArray(expected));
  });

  it('should return the sum of the digits of two linked lists: 3', () => {
    const l1 = fromArray([9, 7, 8]);
    const l2 = fromArray([6, 8, 5]);

    const result = sumLists(l1, l2);
    const expected = fromArray([5, 6, 4, 1]);

    expect(toArray(result)).toEqual(toArray(expected));
  });

  it('should return the sum of the digits of two linked lists: 4', () => {
    const l1 = fromArray([0, 0, 1]);
    const l2 = fromArray([0, 0, 0, 2]);

    const result = sumLists(l1, l2);
    const expected = fromArray([0, 0, 1, 2]);

    expect(toArray(result)).toEqual(toArray(expected));
  });
});
