export class StackNode<T> {
  data: T;
  next: StackNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Stack<T> {
  private top: StackNode<T> | null;

  constructor() {
    this.top = null;
  }

  pop(): T | null {
    if (!this.top) {
      return null;
    }

    const item = this.top.data;
    this.top = this.top.next;

    return item;
  }

  push(item: T): void {
    const node = new StackNode(item);
    node.next = this.top;
    this.top = node;
  }

  peek(): T | null {
    if (!this.top) {
      return null;
    }

    return this.top.data;
  }

  isEmpty(): boolean {
    return !this.top;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.top;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  fromArray(arr: T[]): Stack<T> {
    arr.forEach((item) => this.push(item));

    return this;
  }

  size(): number {
    return this.toArray().length;
  }
}
