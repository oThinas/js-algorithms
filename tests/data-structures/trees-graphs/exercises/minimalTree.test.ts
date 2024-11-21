import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { minimalTree } from '../../../../data-structures/trees-graphs/exercises/minimalTree';

describe('minimalTree', () => {
  it('should return null for an empty array', () => {
    const result = minimalTree([]);
    expect(result).toBeNull();
  });

  it('should create a tree with a single node for an array with a single element', () => {
    const result = minimalTree([1]);
    expect(result).toBeInstanceOf(BinaryTreeNode);
    expect(result?.value).toBe(1);
    expect(result?.left).toBeNull();
    expect(result?.right).toBeNull();
  });

  it('should create a binary search tree with an odd number of elements', () => {
    const result = minimalTree([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toBeInstanceOf(BinaryTreeNode);
    expect(result?.value).toBe(4);
    expect(result?.left?.value).toBe(2);
    expect(result?.left?.left?.value).toBe(1);
    expect(result?.left?.left?.left).toBeNull();
    expect(result?.left?.left?.right).toBeNull();

    expect(result?.left?.right?.value).toBe(3);
    expect(result?.left?.right?.left).toBeNull();
    expect(result?.left?.right?.right).toBeNull();

    expect(result?.right?.value).toBe(6);
    expect(result?.right?.left?.value).toBe(5);
    expect(result?.right?.left?.left).toBeNull();
    expect(result?.right?.left?.right).toBeNull();

    expect(result?.right?.right?.value).toBe(7);
    expect(result?.right?.right?.left).toBeNull();
    expect(result?.right?.right?.right).toBeNull();
  });

  it('should create a binary search tree with an even number of elements', () => {
    const result = minimalTree([1, 2, 3, 4, 5, 6]);
    expect(result).toBeInstanceOf(BinaryTreeNode);
    expect(result?.value).toBe(3);
    expect(result?.left?.value).toBe(1);
    expect(result?.left?.left).toBeNull();

    expect(result?.left?.right?.value).toBe(2);
    expect(result?.left?.right?.left).toBeNull();
    expect(result?.left?.right?.right).toBeNull();

    expect(result?.right?.value).toBe(5);
    expect(result?.right?.left?.value).toBe(4);
    expect(result?.right?.left?.left).toBeNull();
    expect(result?.right?.left?.right).toBeNull();

    expect(result?.right?.right?.value).toBe(6);
    expect(result?.right?.right?.left).toBeNull();
    expect(result?.right?.right?.right).toBeNull();
  });
});
