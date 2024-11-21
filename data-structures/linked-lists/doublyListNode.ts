export class DoublyListNode {
  data: number;
  next: DoublyListNode | null;
  prev: DoublyListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}