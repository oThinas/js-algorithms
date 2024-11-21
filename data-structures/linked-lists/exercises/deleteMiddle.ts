import { ListNode } from '../listNode';

export function deleteMiddle(node: ListNode): void {
  if (!node || !node.next) {
    return;
  }

  const next = node.next;
  node.data = next.data;
  node.next = next.next;
}
