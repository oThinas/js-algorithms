import { ListNode } from '../listNode';

export function partition(head: ListNode, partition: number): ListNode {
  let dummy: ListNode | null = head;
  let lessThan = dummy;
  let greaterThan = dummy;

  while (dummy) {
    const next: ListNode | null = dummy.next;
    if (dummy.data < partition) {
      dummy.next = lessThan;
      lessThan = dummy!;
    } else {
      greaterThan.next = dummy;
      greaterThan = dummy!;
    }

    dummy = next;
  }

  greaterThan.next = null;

  return lessThan;
}
