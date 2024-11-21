import { ListNode } from '../listNode';

export function loopDetection(head: ListNode): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let hadCollision = false;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      hadCollision = true;
      break;
    }
  }

  slow = head;
  if (hadCollision) {
    while (slow !== fast) {
      slow = slow!.next;
      fast = fast!.next;
    }

    return slow;
  }

  return null;
}
