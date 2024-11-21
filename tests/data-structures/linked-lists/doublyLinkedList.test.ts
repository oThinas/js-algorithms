import { DoublyLinkedList } from '../../../data-structures/linked-lists/doublyLinkedList';

describe('doublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  describe('appendToTail', () => {
    it('should add a new node to an empty list', () => {
      doublyLinkedList.appendToTail(1);
      expect(doublyLinkedList.head).not.toBeNull();
      expect(doublyLinkedList.head?.data).toBe(1);
    });

    it('should add a new node to the end of a non-empty list', () => {
      doublyLinkedList.appendToTail(1);
      doublyLinkedList.appendToTail(2);
      doublyLinkedList.appendToTail(3);
      expect(doublyLinkedList.head).not.toBeNull();
      expect(doublyLinkedList.head?.next?.next?.data).toBe(3);
    })
  });

  describe('deleteNode', () => {
    it('should delete the head node', () => {
      doublyLinkedList.appendToTail(1);
      doublyLinkedList.appendToTail(2);
      doublyLinkedList.deleteNode(1);
      expect(doublyLinkedList.head).not.toBeNull();
      expect(doublyLinkedList.head?.data).toBe(2);
    });

    it('should delete a node from the middle of the list', () => {
      doublyLinkedList.appendToTail(1);
      doublyLinkedList.appendToTail(2);
      doublyLinkedList.appendToTail(3);
      doublyLinkedList.deleteNode(2);
      expect(doublyLinkedList.head).not.toBeNull();
      expect(doublyLinkedList.head?.next?.data).toBe(3);
    });

    it('should delete the last node', () => {
      doublyLinkedList.appendToTail(1);
      doublyLinkedList.appendToTail(2);
      doublyLinkedList.appendToTail(3);
      doublyLinkedList.deleteNode(3);
      expect(doublyLinkedList.head?.next?.next).toBeNull();
    });

    it('should not delete a node that does not exist', () => {
      doublyLinkedList.appendToTail(1);
      doublyLinkedList.appendToTail(2);
      doublyLinkedList.deleteNode(3);
      expect(doublyLinkedList.head?.data).toBe(1);
      expect(doublyLinkedList.head?.next?.data).toBe(2);
    });

    it('should not delete a node in an empty linked list', () => {
      doublyLinkedList.deleteNode(1);
      expect(doublyLinkedList.head).toBeNull();
    });
  });
});
