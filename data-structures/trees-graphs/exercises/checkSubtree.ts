import { BinaryTreeNode } from '../binaryTree';

export function checkSubtree(tree: BinaryTreeNode | null, subTree: BinaryTreeNode | null): boolean {
  if (!tree && !subTree) {
    return true;
  }

  function preOrderTraversal(node: BinaryTreeNode | null, result: (number | null)[]): (number | null)[] {
    if (!node) {
      result.push(null);
      return result;
    }

    result.push(node.value);
    preOrderTraversal(node.left, result);
    preOrderTraversal(node.right, result);

    return result;
  }

  function isSubarray(arr: (number | null)[], subArr: (number | null)[]): boolean {
    for (let i = 0; i < arr.length - subArr.length; i++) {
      let j = 0;
      while (j < subArr.length && arr[i + j] === subArr[j]) {
        j++;
      }

      if (j === subArr.length) {
        return true;
      }
    }

    return false;
  }

  const treeArray = preOrderTraversal(tree, []);
  const subTreeArray = preOrderTraversal(subTree, []);

  return isSubarray(treeArray, subTreeArray);
}
