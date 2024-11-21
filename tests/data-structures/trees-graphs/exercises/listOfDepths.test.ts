import { ListNode } from '../../../../data-structures/linked-lists/listNode';
import { BinaryTreeNode } from '../../../../data-structures/trees-graphs/binaryTree';
import { listOfDepthsBFS, listOfDepthsDFS } from '../../../../data-structures/trees-graphs/exercises/listOfDepths';

describe('listOfDepths', () => {
  let root: BinaryTreeNode;
  beforeEach(() => {
    root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.right = new BinaryTreeNode(3);

    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(5);

    root.right.left = new BinaryTreeNode(6);
    root.right.right = new BinaryTreeNode(7);
  });

  const expected = [
    [1],
    [2, 3],
    [4, 5, 6, 7],
  ];

  function convertListNodeToArray(list: ListNode): number[] {
    const result: number[] = [];
    let current: ListNode | null = list;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  it('listOfDepthsDFS should return correct list of depths', () => {
    const result = listOfDepthsDFS(root);
    expect(result.map(convertListNodeToArray)).toEqual(expected);
  });

  it('listOfDepthsBFS should return correct list of depths', () => {
    const result = listOfDepthsBFS(root);
    expect(result.map(convertListNodeToArray)).toEqual(expected);
  });
});
