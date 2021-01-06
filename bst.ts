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

    if (value > node.value) {
      node.right = this.addToTree(node.right, value);
    }

    if (value < node.value) {
      node.left = this.addToTree(node.left, value);
    }

    return node;
  }

  add(value: number): void {
    this.addToTree(this.root, value);
  }

  bfs(action: Function): void {
    if (!this.root) return;
    const queue: BSTNode[] = [this.root];
    while (queue.length) {
      const node = queue.shift();
      action(node?.value);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }


}

const tree = new BSTTree(new BSTNode(7));
tree.add(1);
tree.add(11);
tree.add(3);
tree.add(2);
tree.add(5);
tree.add(8);
tree.add(0);
tree.add(10);
tree.add(4);

tree.bfs(console.log);
