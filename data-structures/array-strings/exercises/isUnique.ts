export function isUnique(str: string): boolean {
  if (str.length > 128) {
    return false;
  }

  const charSet = new Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
    const val = str.charCodeAt(i);
    if (charSet[val]) {
      return false;
    }

    charSet[val] = true;
  }

  return true;
}
