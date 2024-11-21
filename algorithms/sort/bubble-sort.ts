/*
  Given an array of integers, sort the array.
  Examples:
  arr = [-6, 20, 8, -2, 4] -> [-6, -2, 4, 8, 20]
 */

export function bubbleSort(arr: number[]) {
  let wasSwap = false;

  do {
    wasSwap = false;

    for (let i = 0; i < arr.length - 1; i++) {
      const currentElement = arr[i];
      const nextElement = arr[i + 1];

      if (arr[i] > arr[i + 1]) {
        arr[i + 1] = currentElement;
        arr[i] = nextElement;

        wasSwap = true;
      }
    }
  } while (wasSwap)

  return arr;
}