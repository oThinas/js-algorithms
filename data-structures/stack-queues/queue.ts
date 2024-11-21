class QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Queue<T> {
  private first: QueueNode<T> | null;
  private last: QueueNode<T> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  add(item: T): void {
    const node = new QueueNode(item);

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;

    if (!this.first) {
      this.first = this.last;
    }
  }

  remove(): T | null {
    if (!this.first) {
      return null;
    }

    const data = this.first.data;
    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    return data;
  }

  peek(): T | null {
    return this.first?.data || null;
  }

  isEmpty(): boolean {
    return !this.first;
  }
}
