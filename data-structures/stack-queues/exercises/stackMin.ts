import { Stack } from '../stack';

class NodeWithMin {
  value: number;
  min: number;

  constructor(value: number, min: number) {
    this.value = value;
    this.min = min;
  }
}

export class StackWithMin extends Stack<NodeWithMin> {
  override push(value: number | NodeWithMin): void {
    if (typeof value !== 'number') {
      throw new Error('Invalid argument');
    }

    const newMin = Math.min(value, this.min());
    super.push(new NodeWithMin(value, newMin));
  }

  min(): number {
    if (this.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    }

    return this.peek()!.min;
  }
}
