/*
  Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target
  element is not found.

  Exemples:
  arr = [-5, 2, 10, 4, 6], t = 10 -> 2;
  arr = [-5, 2, 10, 4, 6], t = 6 -> 4;
  arr = [-5, 2, 10, 4, 6], t = 20 -> -1;
 */

export function linearSearch(arr: number[], target: number) {
  let index = 0;
  for (const num of arr) {
    if (num === target) {
      return index;
    }

    index++;
  }

  return -1;
}
