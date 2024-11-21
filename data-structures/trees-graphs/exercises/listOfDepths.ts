import { ListNode } from '../../linked-lists/listNode';
import { BinaryTreeNode } from '../binaryTree';

export function listOfDepthsDFS(root: BinaryTreeNode): ListNode[] {
  const lists: ListNode[] = [];

  function create(node: BinaryTreeNode | null, lists: ListNode[], level: number): void {
    if (!node) {
      return;
    }

    let list: ListNode;
    if (lists.length === level) {
      list = new ListNode(node.value);
      lists.push(list);
    } else {
      list = lists[level];
      while (list.next) {
        list = list.next;
      }

      list.next = new ListNode(node.value);
    }

    create(node.left, lists, level + 1);
    create(node.right, lists, level + 1);
  }

  create(root, lists, 0);
  return lists;
}

type Queue = { node: BinaryTreeNode | null; level: number }[];
export function listOfDepthsBFS(root: BinaryTreeNode): ListNode[] {
  const result: ListNode[] = [];
  const resultTail: ListNode[] = [];
  const queue: Queue = [{ node: root, level: 0 }];
  let cursor = 0;

  while (cursor < queue.length) {
    const { node, level } = queue[cursor++];
    if (!node) {
      continue;
    }

    const nextNode = new ListNode(node.value);
    if (result.length === level) {
      result.push(nextNode);
      resultTail.push(nextNode);
    } else {
      resultTail[level].next = nextNode;
      resultTail[level] = nextNode;
    }

    queue.push({ node: node.left, level: level + 1 });
    queue.push({ node: node.right, level: level + 1 });
  }

  return result;
}
