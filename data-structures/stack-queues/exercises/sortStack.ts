import { Stack } from '../stack';

export function sortStack(stack: Stack<number>): void {
  const tempStack = new Stack<number>();

  while (!stack.isEmpty()) {
    const tempElement = stack.pop()!;
    while (!tempStack.isEmpty() && tempStack.peek()! > tempElement) {
      stack.push(tempStack.pop()!);
    }

    tempStack.push(tempElement);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop()!);
  }
}
