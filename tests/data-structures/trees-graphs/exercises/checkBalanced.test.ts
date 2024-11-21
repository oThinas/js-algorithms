import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { checkBalanced } from '../../../../data-structures/trees-graphs/exercises/checkBalanced';

describe('checkBalanced', () => {
  it('should return true for a balanced binary tree', () => {
    const root = new BinaryTreeNode(3);
    root.left = new BinaryTreeNode(9);
    root.right = new BinaryTreeNode(20);
    root.right.left = new BinaryTreeNode(15);
    root.right.right = new BinaryTreeNode(7);

    expect(checkBalanced(root)).toBe(true);
  });

  it('should return false for an unbalanced binary tree', () => {
    const root = new BinaryTreeNode(1);
    root.right = new BinaryTreeNode(2);
    root.left = new BinaryTreeNode(2);
    root.left.right = new BinaryTreeNode(3);
    root.left.left = new BinaryTreeNode(3);
    root.left.left.left = new BinaryTreeNode(4);
    root.left.left.right = new BinaryTreeNode(4);

    expect(checkBalanced(root)).toBe(false);
  });

  it('should return true for a single node binary tree', () => {
    const root = new BinaryTreeNode(1);

    expect(checkBalanced(root)).toBe(true);
  });

  it('should return true for an empty binary tree', () => {
    expect(checkBalanced(null)).toBe(true);
  });
});
