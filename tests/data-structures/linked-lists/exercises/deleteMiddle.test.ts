import { deleteMiddle } from '../../../../data-structures/linked-lists/exercises/deleteMiddle';
import { ListNode } from '../../../../data-structures/linked-lists/listNode';

describe('deleteMiddle', () => {
  it('should delete a node in the middle of a linked list', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    deleteMiddle(node3);

    expect(node1.data).toBe(1);
    expect(node1.next.data).toBe(2);
    expect(node1.next.next?.data).toBe(4);
  });

  it('should not delete a node of an empty linked', () => {
    const node1 = new ListNode(1);

    deleteMiddle(node1);

    expect(node1.data).toBe(1);
  });
});
