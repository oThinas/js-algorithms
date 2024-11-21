/*
  Given an array of integers, sort the array.
  Examples:
  arr = [-6, 20, 8, -2, 4] -> [-6, -2, 4, 8, 20]
 */

export function insertionSort(arr: number[]) {
  for (let current = 1; current < arr.length; current++) {
    const currentElement = arr[current];
    let previous = current - 1;

    while (previous >= 0 && arr[previous] > currentElement) {
      arr[previous + 1] = arr[previous];
      previous--;
    }

    arr[previous + 1] = currentElement;
  }

  return arr;
}