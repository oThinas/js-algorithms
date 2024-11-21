export function urlify(str: string): string {
  const trimmed = str.trim();
  return trimmed.replaceAll(' ', '%20');
}