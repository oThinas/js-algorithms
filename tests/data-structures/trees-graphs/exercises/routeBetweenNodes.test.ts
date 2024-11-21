import { routeBetweenNodes } from '../../../../data-structures/trees-graphs/exercises/routeBetweenNodes';
import { TreeNode } from '../../../../data-structures/trees-graphs/tree';

describe('routeBetweenNodes', () => {
  let nodeA: TreeNode;
  let nodeB: TreeNode;
  let nodeC: TreeNode;
  let nodeD: TreeNode;
  let nodeE: TreeNode;

  beforeEach(() => {
    nodeA = new TreeNode(1);
    nodeB = new TreeNode(2);
    nodeC = new TreeNode(3);
    nodeD = new TreeNode(4);
    nodeE = new TreeNode(5);

    nodeA.addChild(nodeB);
    nodeA.addChild(nodeC);
    nodeB.addChild(nodeD);
    nodeD.addChild(nodeE);
  });

  it('should return true if there is a route between nodes', () => {
    expect(routeBetweenNodes(nodeA, nodeE)).toBe(true);
  });

  it('should return false if there is no route between nodes', () => {
    expect(routeBetweenNodes(nodeC, nodeB)).toBe(false);
  });

  it('should return true if the start and end nodes are the same', () => {
    expect(routeBetweenNodes(nodeA, nodeA)).toBe(true);
  });

  it('should return false if the node has no children', () => {
    const singleNode = new TreeNode(6);
    expect(routeBetweenNodes(singleNode, nodeE)).toBe(false);
  });

  it('should return true if there is a route through multiple children', () => {
    nodeD.addChild(nodeE);
    expect(routeBetweenNodes(nodeA, nodeE)).toBe(true);
  });
});
