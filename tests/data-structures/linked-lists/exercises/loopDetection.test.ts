import { loopDetection } from '../../../../data-structures/linked-lists/exercises/loopDetection';
import { fromArray } from '../../../../data-structures/linked-lists/linkedList';
import { ListNode } from '../../../../data-structures/linked-lists/listNode';

describe('loopDetection', () => {
  it('should return the head of the loop on a circular linked list', () => {
    const head = fromArray([3, 4, 5, 6, 7]);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    node1.next = node2;
    node2.next = head;

    let current = head;
    while (current.next) {
      current = current.next;
    }

    current.next = head;

    const result = loopDetection(node1);
    const expected = head;

    expect(result).toBe(expected);
  });

  it('should return null on a non-circular linked list', () => {
    const head = fromArray([3, 4, 5, 6, 7]);

    const result = loopDetection(head);
    const expected = null;

    expect(result).toBe(expected);
  });
});
