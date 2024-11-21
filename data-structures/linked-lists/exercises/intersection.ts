import { ListNode } from '../listNode';

export function intersection(l1: ListNode, l2: ListNode): ListNode | null {
  let currentL1: ListNode | null = l1;
  let currentL2: ListNode | null = l2;

  while (currentL1 !== currentL2) {
    currentL1 = currentL1 === null ? l2 : currentL1.next;
    currentL2 = currentL2 === null ? l1 : currentL2.next;
  }

  return currentL1;
}
