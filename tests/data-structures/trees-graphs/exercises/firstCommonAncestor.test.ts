import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { firstCommonAncestor } from '../../../../data-structures/trees-graphs/exercises/firstCommonAncestor';

describe('firstCommonAncestor', () => {
  let root: BinaryTreeNode;
  beforeEach(() => {
    root = new BinaryTreeNode(3);
    root.left = new BinaryTreeNode(5);
    root.right = new BinaryTreeNode(1);

    root.left.left = new BinaryTreeNode(6);
    root.left.right = new BinaryTreeNode(2);
    root.right.left = new BinaryTreeNode(0);
    root.right.right = new BinaryTreeNode(8);

    root.left.right.left = new BinaryTreeNode(7);
    root.left.right.right = new BinaryTreeNode(4);
  });

  it('should return the first common ancestor of two nodes in a binary tree 1', () => {
    const node1 = root.left;
    const node2 = root.right;
    expect(firstCommonAncestor(root, node1, node2)).toBe(root);
  });

  it('should return the first common ancestor of two nodes in a binary tree 2', () => {
    const node1 = root.left;
    const node2 = root!.left!.right!.right;
    expect(firstCommonAncestor(root, node1, node2)).toBe(node1);
  });

  it('should return the first common ancestor of two nodes in a binary tree 3', () => {
    const node1 = root.left!.right!.left;
    const node2 = root.left!.right!.right;
    const expected = root.left!.right
    expect(firstCommonAncestor(root, node1, node2)).toBe(expected);
  });
});
