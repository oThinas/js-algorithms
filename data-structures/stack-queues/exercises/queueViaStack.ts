import { Stack } from '../stack';

export class QueueViaStack<T> {
  private stackNewest: Stack<T>;
  private stackOldest: Stack<T>;

  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  size(): number {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  add(value: T): void {
    this.stackNewest.push(value);
  }

  peek(): T | null {
    this.shiftStacks();
    return this.stackOldest.peek();
  }

  remove(): T | null {
    this.shiftStacks();
    return this.stackOldest.pop();
  }

  private shiftStacks(): void {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop()!);
      }
    }
  }
}
