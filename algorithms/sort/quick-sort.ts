/*
  Given an array of integers, sort the array.
  Examples:
  arr = [-6, 20, 8, -2, 4] -> [-6, -2, 4, 8, 20]
 */

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (const num of arr) {
    if (num < pivot) left.push(num)
    else if (num > pivot) right.push(num);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
