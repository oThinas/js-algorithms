import { TreeNode } from '../tree';

export function routeBetweenNodes(start: TreeNode, end: TreeNode): boolean {
  const visited = new Set<TreeNode>();
  const queue = [start];

  while (queue.length) {
    const currentNode = queue.shift()!;
    if (currentNode === end) {
      return true;
    }

    visited.add(currentNode);
    for (const child of currentNode.children) {
      if (!visited.has(child)) {
        queue.push(child);
      }
    }
  }

  return false;
}
