import { BinaryTreeNode } from '../binaryTree';

export function validateBST(node: BinaryTreeNode): boolean {
  function dfs(node: BinaryTreeNode | null, min: number, max: number): boolean {
    if (!node) {
      return true;
    }

    if (min <= node.value && node.value < max) {
      return dfs(node.left, min, node.value) && dfs(node.right, node.value, max);
    }

    return false;
  }

  return dfs(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
