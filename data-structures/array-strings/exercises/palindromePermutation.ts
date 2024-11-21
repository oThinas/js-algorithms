export function palindromePermutation(str: string): boolean {
  const charCount = new Map<string, number>();

  for (const char of str) {
    if (char === ' ') {
      continue;
    }

    const lowerChar = char.toLowerCase();
    const count = charCount.get(lowerChar) || 0;

    if (count === 0) {
      charCount.set(lowerChar, 1);
    } else {
      charCount.set(lowerChar, count + 1);
    }
  }

  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}
