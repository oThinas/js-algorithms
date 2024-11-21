import { BinaryTreeNode } from '../binaryTree';

type Node = BinaryTreeNode | null;

export function firstCommonAncestor(root: Node, node1: Node, node2: Node): Node {
  function dfs(current: Node, p: Node, q: Node): Node {
    if (!current || current === p || current === q) {
      return current;
    }

    const left = dfs(current.left, p, q);
    const right = dfs(current.right, p, q);

    if (left && right) {
      return current;
    }

    return left || right;
  }

  return dfs(root, node1, node2);
}
