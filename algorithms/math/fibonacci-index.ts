export function fibonacciIndex(index: number): number {
  if (index < 0) {
    throw new Error('Index must be a positive integer number');
  } else if (index <= 1) {
    return index;
  }

  return fibonacciIndex(index - 1) + fibonacciIndex(index - 2);
}