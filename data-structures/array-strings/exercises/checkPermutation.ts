export function checkPermutation(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new Map<string, number>();
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    const count = map.get(char);
    if (!count) {
      return false;
    }

    if (count === 1) {
      map.delete(char);
    } else {
      map.set(char, count - 1);
    }
  }

  return map.size === 0;
}