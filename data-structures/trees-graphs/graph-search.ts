import { TreeNode } from './tree';

function dfs(node: TreeNode | null): void {
  if (!node) {
    return;
  }

  const visited = new Set<TreeNode>();

  console.log(node.value);
  visited.add(node);

  for (const child of node.children) {
    if (!visited.has(child)) {
      dfs(child);
    }
  }
}

function bfs(node: TreeNode): void {
  const visited = new Set<TreeNode>();
  const queue = [node];
  visited.add(node);

  while (queue.length) {
    const currentNode = queue.shift()!;
    console.log(currentNode.value);

    for (const child of currentNode.children) {
      if (!visited.has(child)) {
        visited.add(child);
        queue.push(child);
      }
    }
  }
}
