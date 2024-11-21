/*
  Given an array of integers, sort the array.
  Examples:
  arr = [-6, 20, 8, -2, 4] -> [-6, -2, 4, 8, 20]
 */

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftElement = left[leftIndex];
    const rightElement = right[rightIndex];

    if (leftElement < rightElement) {
      result.push(leftElement);
      leftIndex++;
    } else {
      result.push(rightElement);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
