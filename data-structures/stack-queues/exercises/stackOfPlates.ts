import { Stack } from '../stack';

export class SetOfStacks {
  private stacks: Stack<number>[] = [];
  private stacksLength: number[] = [];
  private readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.createStack();
  }

  push(value: number): void {
    if (this.getLastStackLength() === this.capacity) {
      this.createStack();
    }

    this.getLastStack().push(value);
    this.incrementLastStackLength();
  }

  pop(): number | null {
    const popped = this.getLastStack().pop();
    this.decrementLastStackLength();

    if (!this.getLastStackLength()) {
      this.deleteStack();
    }

    return popped;
  }

  popAt(index: number): number | null {
    if (index < 0 || index >= this.stacks.length) {
      throw new Error('Index out of bounds');
    }

    const stack = this.stacks[index];
    const value = stack.pop();

    if (stack.isEmpty() && this.stacks.length > 1) {
      this.stacks.splice(index, 1);
      this.stacksLength.splice(index, 1);
    } else {
      this.shiftLeft(index);
    }

    return value;
  }

  peek(): number | null {
    return this.getLastStack().peek();
  }

  isEmpty(): boolean {
    return this.getLastStack().isEmpty();
  }

  private createStack(): void {
    this.stacks.push(new Stack<number>());
    this.stacksLength.push(0);
  }

  private deleteStack(): void {
    this.stacks.pop();
    this.stacksLength.pop();

    if (!this.stacks.length) {
      this.createStack();
    }
  }

  private shiftLeft(index: number): void {
    for (let i = index; i < this.stacks.length - 1; i++) {
      const currentStack = this.stacks[i];
      const nextStack = this.stacks[i + 1];
      const bottomOfNextStack = this.removeBottom(nextStack);
      currentStack.push(bottomOfNextStack);
      this.stacksLength[i]++;
      this.stacksLength[i + 1]--;
    }

    if (this.getLastStack().isEmpty()) {
      this.stacks.pop();
      this.stacksLength.pop();
    }
  }

  private removeBottom(stack: Stack<number>): number {
    const bufferStack = new Stack<number>();
    while (!stack.isEmpty()) {
      bufferStack.push(stack.pop()!);
    }

    const bottom = bufferStack.pop()!;
    while (!bufferStack.isEmpty()) {
      stack.push(bufferStack.pop()!);
    }

    return bottom;
  }

  private getLastStack(): Stack<number> {
    return this.stacks[this.stacks.length - 1];
  }

  private getLastStackLength(): number {
    return this.stacksLength[this.stacks.length - 1];
  }

  private incrementLastStackLength(): void {
    this.stacksLength[this.stacks.length - 1]++;
  }

  private decrementLastStackLength(): void {
    this.stacksLength[this.stacks.length - 1]--;
  }
}
