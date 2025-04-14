class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Returns void
  insert(value) {
    // 1. check if root is empty
    // 2. if root is not empty, check value
    // 3. find the child node to attach
    // 4. if duplicate node is encountered, return undefined

    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let nodeToCheck = this.root;
    while (true) {
      if (nodeToCheck.value === newNode.value) {
        return undefined;
      }

      if (newNode.value < nodeToCheck.value) {
        if (nodeToCheck.left === null) {
          nodeToCheck.left = newNode;
          return this;
        }
        nodeToCheck = nodeToCheck.left;
      } else if (newNode.value > nodeToCheck.value) {
        if (nodeToCheck.right === null) {
          nodeToCheck.right = newNode;
          return this;
        }
        nodeToCheck = nodeToCheck.right;
      }
    }
  }

  // Returns boolean
  contains(value) {
    if (this.root === null) {
      return false;
    }

    let nodeToCheck = this.root;
    while (nodeToCheck) {
      if (value < nodeToCheck.value) {
        nodeToCheck = nodeToCheck.left;
      } else if (value > nodeToCheck.value) {
        nodeToCheck = nodeToCheck.right;
      } else {
        // if (value === nodeToCheck.value)
        return true;
      }
    }
    return false;
  }
}

const binarySearchTree = new BST();
binarySearchTree.insert(3);
binarySearchTree.insert(5);
binarySearchTree.insert(7);

console.log(binarySearchTree);
