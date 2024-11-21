import { ListNode } from '../listNode';

export function sumLists(l1: ListNode, l2: ListNode): ListNode {
  const dummy = new ListNode(0);
  let result = dummy;
  let currentL1: ListNode | null = l1;
  let currentL2: ListNode | null = l2;
  let carry = 0;

  while (currentL1 || currentL2) {
    const sum = (currentL1?.data || 0) + (currentL2?.data || 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    const newNode = new ListNode(digit);
    result.next = newNode;

    result = newNode;
    currentL1 = currentL1?.next || null;
    currentL2 = currentL2?.next || null;
  }

  if (carry) {
    result.next = new ListNode(carry);
  }

  return dummy.next!;
}
