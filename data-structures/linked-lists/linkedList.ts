import { ListNode } from './listNode';

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  appendToTail(data: number) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  deleteNode(data: number) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

export function fromArray(values: number[]): ListNode {
  const list = new LinkedList();
  values.forEach(value => list.appendToTail(value));

  return list.head!;
}

export function toArray(head: ListNode): number[] {
  const result: number[] = [];
  let current: ListNode | null = head;

  while (current) {
    result.push(current.data);
    current = current.next;
  }

  return result;
}
