class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  recursiveInsert(value, currentNode) {
    if (currentNode === null) {
      return new Node(value);
    }
    if (value < currentNode.value) {
      currentNode.left = this.recursiveInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  // Recursive insert
  rInsert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }
    return this.recursiveInsert(value, this.root);
  }

  preOrderTraversal() {
    if (this.root === null) return [];
    const results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }

    traverse(this.root);

    return results;
  }

  postOrderTraversal() {
    if (this.root === null) return [];
    const results = [];

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      results.push(currentNode.value);
    }

    traverse(this.root);

    return results;
  }

  inOrderTraversal() {
    if (this.root === null) return [];
    const results = [];

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      results.push(currentNode.value);
      if (currentNode.right) {
        traverse(currentNode.right);
      }

      return currentNode;
    }

    traverse(this.root);
    return results;
  }

  inOrderTraversalInReverse() {
    if (this.root === null) return [];
    const results = [];

    function traverse(currentNode) {
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      results.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }

      return currentNode;
    }

    traverse(this.root);
    return results;
  }
}

const binaryTree = new BinaryTree();
binaryTree.rInsert(47);
binaryTree.rInsert(21);
binaryTree.rInsert(76);
binaryTree.rInsert(18);
binaryTree.rInsert(27);
binaryTree.rInsert(52);
binaryTree.rInsert(82);

console.log("BT", binaryTree.root);

console.log(
  "Pre-order traversal of all elements in tree",
  binaryTree.preOrderTraversal()
);
console.log(
  "Post order traversal of all elements in tree",
  binaryTree.postOrderTraversal()
);
console.log(
  "In-order traversal of all elements in tree",
  binaryTree.inOrderTraversal()
);
console.log(
  "Elements of tree in reverse",
  binaryTree.inOrderTraversalInReverse()
);
