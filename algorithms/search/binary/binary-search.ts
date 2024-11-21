/*
  Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the
  target element is not found.

  Exemples:
  arr = [-5, 2, 4, 6, 10], t = 10 -> 4;
  arr = [-5, 2, 4, 6, 10], t = 6 -> 3;
  arr = [-5, 2, 4, 6, 10], t = 20 -> -1;
 */

export function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    const element = arr[middle];

    if (element === target) {
      return middle;
    }

    if (element < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}