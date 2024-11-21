export function recursiveBinarySearch(arr: number[], target: number, left = 0, right = arr.length - 1) {
  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    const element = arr[middle];

    if (element === target) {
      return middle;
    }

    if (element < target) {
      return recursiveBinarySearch(arr, target, middle + 1, right);
    }

    if (element > target) {
      return recursiveBinarySearch(arr, target, left, middle - 1);
    }
  }

  return -1;
}