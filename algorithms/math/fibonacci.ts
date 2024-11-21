export function fibonacci(num: number) {
  const result: number[] = []; // O(1)
  let a = 0; // O(1)
  let b = 1; // O(1)

  for (let i = 0; i < num; i++) {
    result.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  } // O(n)

  return result; // O(1)
}