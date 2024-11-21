import { removeDups, removeDupsNoBuffer } from '../../../../data-structures/linked-lists/exercises/removeDups';
import { fromArray, toArray } from '../../../../data-structures/linked-lists/linkedList';

describe('removeDups x removeDupsNoBuffer', () => {
  describe('removeDups', () => {
    it('should remove duplicates from a linked list', () => {
      const head = fromArray([1, 2, 3, 2, 4, 5, 3]);
      const result = removeDups(head);

      expect(result).not.toBeNull();
      expect(toArray(result)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('removeDupsNoBuffer', () => {
    it('should remove duplicates from a linked list', () => {
      const head = fromArray([1, 2, 3, 2, 4, 5, 3]);
      const result = removeDupsNoBuffer(head);

      expect(result).not.toBeNull();
      expect(toArray(result)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('performance test', () => {
    const arr = Array.from({ length: 10000 }, (_) => Math.floor(Math.random() * 10));

    test('removeDupsNoBuffer', () => {
      const head = fromArray(arr);
      const start = performance.now();
      removeDupsNoBuffer(head);
      const end = performance.now();

      console.log(`removeDupsNoBuffer: ${end - start}ms`);
    });

    test('removeDups', () => {
      const head = fromArray(arr);
      const start = performance.now();
      removeDups(head);
      const end = performance.now();

      console.log(`removeDups: ${end - start}ms`);
    });
  });
});