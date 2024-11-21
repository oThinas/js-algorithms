import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { validateBST } from '../../../../data-structures/trees-graphs/exercises/validateBST';

describe('validateBST', () => {
  it('should return true for a valid BST', () => {
    const root = new BinaryTreeNode(10);
    root.left = new BinaryTreeNode(5);
    root.right = new BinaryTreeNode(15);

    root.left.left = new BinaryTreeNode(2);
    root.left.right = new BinaryTreeNode(7);

    root.right.left = new BinaryTreeNode(12);
    root.right.right = new BinaryTreeNode(20);

    expect(validateBST(root)).toBe(true);
  });

  it('should return false for an invalid BST', () => {
    const root = new BinaryTreeNode(10);
    root.left = new BinaryTreeNode(5);
    root.right = new BinaryTreeNode(15);

    root.left.left = new BinaryTreeNode(2);
    root.left.right = new BinaryTreeNode(12);

    expect(validateBST(root)).toBe(false);
  });

  it('should return true for a single node tree', () => {
    const root = new BinaryTreeNode(10);

    expect(validateBST(root)).toBe(true);
  });
});
