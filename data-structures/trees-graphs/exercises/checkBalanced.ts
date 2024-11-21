import { BinaryTreeNode } from '../binaryTree';

export function checkBalanced(node: BinaryTreeNode | null): boolean {
  function dfs(node: BinaryTreeNode | null): number {
    if (!node) {
      return -1;
    }

    const leftHeight = dfs(node.left);
    if (leftHeight === Number.MIN_SAFE_INTEGER) {
      return leftHeight;
    }

    const rightHeight = dfs(node.right);
    if (rightHeight === Number.MIN_SAFE_INTEGER) {
      return rightHeight;
    }

    const heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) {
      return Number.MIN_SAFE_INTEGER;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return dfs(node) !== Number.MIN_SAFE_INTEGER;
}
