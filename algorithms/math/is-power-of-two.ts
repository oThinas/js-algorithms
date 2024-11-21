export function isPowerOfTwo(num: number) {
  if (num >= 2 && num % 2 !== 0) {
    return false;
  }

  let power = 1;

  while (power <= num) {
    if (power === num) {
      return true;
    }

    power *= 2;
  }

  return false;
}