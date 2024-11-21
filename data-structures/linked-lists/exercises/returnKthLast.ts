import { ListNode } from '../listNode';

export function returnKthLast(head: ListNode, k: number): ListNode {
  let current = head;
  let runner = head;

  for (let i = 0; i < k; i++) {
    runner = runner.next!;
  }

  while (runner) {
    current = current.next!;
    runner = runner.next!;
  }

  return current;
}