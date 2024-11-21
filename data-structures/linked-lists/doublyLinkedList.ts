import { DoublyListNode } from './doublyListNode';

export class DoublyLinkedList {
  head: DoublyListNode | null;

  constructor() {
    this.head = null;
  }

  appendToTail(data: number) {
    const newNode = new DoublyListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
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
      if (current.next) {
        current.next.prev = current;
      }
    }
  }
}
