import { BinaryTreeNode } from '../binaryTree';

export function minimalTree(arr: number[]): BinaryTreeNode | null {
  function create(arr: number[], start: number, end: number): BinaryTreeNode | null {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new BinaryTreeNode(arr[mid]);
    node.left = create(arr, start, mid - 1);
    node.right = create(arr, mid + 1, end);

    return node;
  }

  return create(arr, 0, arr.length - 1);
}
