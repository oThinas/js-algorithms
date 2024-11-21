/**
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values
 * along the path equals targetSum. The path does not need to start or end at the root or a leaf, but it must go
 * downwards (i.e., traveling only from parent nodes to child nodes).
 */

import { BinaryTreeNode } from '../binaryTree';

export function pathsWithSum(root: BinaryTreeNode | null, targetSum: number): number {
  function dfs(
    current: BinaryTreeNode | null,
    targetSum: number,
    currentSum: number,
    pathCount: Map<number, number>
  ): number {
    if (!current) {
      return 0;
    }

    currentSum += current.value;
    const oldSum = currentSum - targetSum;
    let totalPaths = pathCount.get(oldSum) || 0;

    if (currentSum === targetSum) {
      totalPaths++;
    }

    pathCount.set(currentSum, (pathCount.get(currentSum) || 0) + 1);
    totalPaths += dfs(current.left, targetSum, currentSum, pathCount);
    totalPaths += dfs(current.right, targetSum, currentSum, pathCount);
    pathCount.set(currentSum, pathCount.get(currentSum)! - 1);

    return totalPaths;
  }

  return dfs(root, targetSum, 0, new Map<number, number>());
}
