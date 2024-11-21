export function stringRotation(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  return (str1 + str1).includes(str2);
}
