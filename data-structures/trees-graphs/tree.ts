export class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number) {
    this.value = value;
    this.children = [];
  }

  addChild(child: TreeNode): void {
    this.children.push(child);
  }
}

export class Tree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }
}
