import { ListNode } from '../listNode';

export function palindrome(head: ListNode): boolean {
  function reverseAndClone(node: ListNode): ListNode {
    let head: ListNode | null = null;
    let current: ListNode | null = node;

    while (current) {
      const newNode = new ListNode(current.data);
      newNode.next = head;
      head = newNode;
      current = current.next;
    }

    return head!;
  }

  function isEqual(l1: ListNode, l2: ListNode): boolean {
    let currentL1: ListNode | null = l1;
    let currentL2: ListNode | null = l2;

    while (currentL1 && currentL2) {
      if (currentL1.data !== currentL2.data) {
        return false;
      }

      currentL1 = currentL1.next;
      currentL2 = currentL2.next;
    }

    return currentL1 === null && currentL2 === null;
  }

  const reversed = reverseAndClone(head);
  return isEqual(head, reversed);
}

export function palindromeReversingHalf(head: ListNode): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let current = slow;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let firstHalf: ListNode | null = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (firstHalf!.data !== secondHalf.data) {
      return false;
    }

    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
export function palindromeStack(head: ListNode): boolean {
  const stack: number[] = [];
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    stack.push(slow!.data);
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow!.next;
  }

  while (slow) {
    const top = stack.pop();
    if (top !== slow.data) {
      return false;
    }

    slow = slow.next;
  }

  return true;
}
