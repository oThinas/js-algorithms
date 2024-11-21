import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { checkSubtree } from '../../../../data-structures/trees-graphs/exercises/checkSubtree';

describe('checkSubtree', () => {
  it('should return true if subTree is a subtree of tree', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);
    tree.left.left = new BinaryTreeNode(4);
    tree.left.right = new BinaryTreeNode(5);

    const subTree = new BinaryTreeNode(2);
    subTree.left = new BinaryTreeNode(4);
    subTree.right = new BinaryTreeNode(5);

    expect(checkSubtree(tree, subTree)).toBe(true);
  });

  it('should return false if subTree is not a subtree of tree', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);
    tree.left.left = new BinaryTreeNode(4);
    tree.left.right = new BinaryTreeNode(5);

    const subTree = new BinaryTreeNode(2);
    subTree.left = new BinaryTreeNode(4);
    subTree.right = new BinaryTreeNode(6);

    expect(checkSubtree(tree, subTree)).toBe(false);
  });

  it('should return true if both tree and subTree are null', () => {
    expect(checkSubtree(null, null)).toBe(true);
  });

  it('should return false if tree is null and subTree is not null', () => {
    const subTree = new BinaryTreeNode(1);
    expect(checkSubtree(null, subTree)).toBe(false);
  });

  it('should return true if subTree is null and tree is not null', () => {
    const tree = new BinaryTreeNode(1);
    expect(checkSubtree(tree, null)).toBe(true);
  });

  it('should return true if subTree is an empty subtree of tree', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);

    const subTree = new BinaryTreeNode(2);

    expect(checkSubtree(tree, subTree)).toBe(true);
  });

  it('should return false if subTree has extra nodes not in tree', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(2);
    tree.right = new BinaryTreeNode(3);

    const subTree = new BinaryTreeNode(2);
    subTree.left = new BinaryTreeNode(4);

    expect(checkSubtree(tree, subTree)).toBe(false);
  });
});