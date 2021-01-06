class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTTree {
  root: BSTNode;
  constructor(node: BSTNode) {
    this.root = node;
  }

  private addToTree(node: BSTNode | null, value: number): BSTNode {
    if (!node) return new BSTNode(value);

    if (value > node.value)
      return node.right = this.addToTree(node.right, value);

    if (value < node.value)
      return node.left = this.addToTree(node.left, value);

    return node;
  }

  add(value: number): BSTNode {
    return this.addToTree(this.root, value);
  }
}
