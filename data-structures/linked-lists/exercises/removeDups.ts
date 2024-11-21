import { ListNode } from '../listNode';

export function removeDups(head: ListNode): ListNode {
  const numbersSeen = new Set<number>();
  let current: ListNode | null = head;

  while (current) {
    numbersSeen.add(current!.data);

    if (current.next && numbersSeen.has(current.next.data)) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return head;
}

export function removeDupsNoBuffer(head: ListNode): ListNode {
  let current: ListNode | null = head;
  while (current) {
    let runner = current;
    while (runner.next) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return head;
}
