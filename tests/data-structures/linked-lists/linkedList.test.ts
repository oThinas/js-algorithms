import { fromArray, LinkedList, toArray } from '../../../data-structures/linked-lists/linkedList';

describe('linkedList', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('appendToTail', () => {
    it('should add a new node to an empty list', () => {
      linkedList.appendToTail(1);
      expect(linkedList.head).not.toBeNull();
      expect(linkedList.head?.data).toBe(1);
    });

    it('should add a new node to the end of a non-empty list', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.appendToTail(3);
      expect(linkedList.head).not.toBeNull();
      expect(linkedList.head?.next?.next?.data).toBe(3);
    })
  });

  describe('deleteNode', () => {
    it('should delete the head node', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.deleteNode(1);
      expect(linkedList.head).not.toBeNull();
      expect(linkedList.head?.data).toBe(2);
    });

    it('should delete a node from the middle of the list', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.appendToTail(3);
      linkedList.deleteNode(2);
      expect(linkedList.head).not.toBeNull();
      expect(linkedList.head?.next?.data).toBe(3);
    });

    it('should delete the last node', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.appendToTail(3);
      linkedList.deleteNode(3);
      expect(linkedList.head?.next?.next).toBeNull();
    });

    it('should not delete a node that does not exist', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.deleteNode(3);
      expect(linkedList.head?.data).toBe(1);
      expect(linkedList.head?.next?.data).toBe(2);
    });

    it('should not delete a node in an empty linked list', () => {
      linkedList.deleteNode(1);
      expect(linkedList.head).toBeNull();
    });
  });

  describe('fromArray', () => {
    it('should create a linked list from an array', () => {
      const head = fromArray([1, 2, 3]);

      expect(head).not.toBeNull();
      expect(head?.data).toBe(1);
      expect(head?.next?.data).toBe(2);
      expect(head?.next?.next?.data).toBe(3);
    });
  });

  describe('toArray', () => {
    it('should create an array from a linked list', () => {
      linkedList.appendToTail(1);
      linkedList.appendToTail(2);
      linkedList.appendToTail(3);

      const result = toArray(linkedList.head!);
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
