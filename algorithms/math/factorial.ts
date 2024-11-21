export function factorial(num: number) {
  if (!num) {
    return 1;
  }

  let result = num;

  for (let i = result - 1; 2 <= i; i--) {
    result *= i;
  }

  return result;
}
