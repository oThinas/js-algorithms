export class FixedMultiStack {
  private numberOfStacks = 3;
  private stackCapacity: number;
  private values: (number | null)[];
  private sizes: number[];

  constructor(stackSize: number) {
    this.stackCapacity = stackSize;
    this.values = new Array(stackSize * this.numberOfStacks);
    this.sizes = new Array(this.numberOfStacks).fill(0);
  }

  push(stackNum: number, value: number): void {
    if (this.isFull(stackNum)) {
      throw new FullStackException();
    }

    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = value;
  }

  pop(stackNum: number): number {
    if (this.isEmpty(stackNum)) {
      throw new EmptyStackException();
    }

    const topIndex = this.indexOfTop(stackNum);
    const value = this.values[topIndex];
    this.values[topIndex] = null;
    this.sizes[stackNum]--;

    return value as number;
  }

  peek(stackNum: number): number {
    if (this.isEmpty(stackNum)) {
      throw new EmptyStackException();
    }

    return this.values[this.indexOfTop(stackNum)] as number;
  }

  isEmpty(stackNum: number): boolean {
    return !this.sizes[stackNum];
  }

  isFull(stackNum: number): boolean {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  private indexOfTop(stackNum: number): number {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

export class FullStackException extends Error {
  constructor(message = 'Stack is full') {
    super(message);
    this.name = 'FullStackException';
  }
}

export class EmptyStackException extends Error {
  constructor(message = 'Stack is empty') {
    super(message);
    this.name = 'EmptyStackException';
  }
}
