import { intersection } from '../../../../data-structures/linked-lists/exercises/intersection';
import { fromArray } from '../../../../data-structures/linked-lists/linkedList';
import { ListNode } from '../../../../data-structures/linked-lists/listNode';

describe('intersection', () => {
  it('should return the intersection node of two linked lists', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const node6 = new ListNode(2);
    const node7 = new ListNode(3);

    node6.next = node7;
    node7.next = node4;

    const result = intersection(node1, node6);
    const expected = node4;

    expect(result).toBe(expected);
  });

  it('should return null if none node intersects two linked lists', () => {
    const node1 = fromArray([1, 2, 3, 4, 5]);
    const node2 = fromArray([2, 3, 4, 5]);

    const result = intersection(node1, node2);
    const expected = null;

    expect(result).toBe(expected);
  });
});
