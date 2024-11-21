export function factorialRecursive(num: number): number {
  if (num <= 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  }

  return num * factorialRecursive(num - 1);
}