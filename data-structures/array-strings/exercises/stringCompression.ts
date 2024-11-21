export function stringCompression(str: string): string {
  let compressed = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed += str[i] + count;
      count = 0;
    }
  }

  return compressed.length < str.length ? compressed : str;
}
