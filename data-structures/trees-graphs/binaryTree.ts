export class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  inOrderTraversal(node = this.root): void {
    if (!node) {
      return;
    }

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node = this.root): void {
    if (!node) {
      return;
    }

    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root): void {
    if (!node) {
      return;
    }

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.value);
  }
}
