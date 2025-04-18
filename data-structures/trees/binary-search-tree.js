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

  // Recursive contains method implementation
  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;

    if (currentNode.value === value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  // Private method
  #recursiveInsert(value, currentNode) {
    if (currentNode === null) return new Node(value);
    if (value < currentNode.value) {
      currentNode.left = this.#recursiveInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  rInsert(value, currentNode = this.root) {
    if (currentNode === null) {
      return (this.root = new Node(value));
    }
    return this.#recursiveInsert(value, currentNode);
  }

  minimumValueOfBST(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value; // we return the value in the node
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      // when the node-to-delete is found in the tree
      // handle the scenarios for deleting a node

      // if the node-to-delete is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      }
      // if the node-to-delete has 1 child to its left
      else if (currentNode.left && currentNode.right === null) {
        currentNode = currentNode.left;
      }
      // if the node-to-delete has 1 child to its right
      else if (currentNode.left === null && currentNode.right) {
        currentNode = currentNode.right;
      } else {
        // if the node-to-delete has 2 children
        const minimumValueOfSubTree = this.minimumValueOfBST(currentNode.right);
        currentNode.value = minimumValueOfSubTree;
        currentNode.right = this.#deleteNode(
          minimumValueOfSubTree,
          currentNode.right
        );
      }
    }

    return currentNode;
  }

  rDelete(value) {
    this.root = this.#deleteNode(value, this.root);
  }
}

const binarySearchTree = new BST();
binarySearchTree.rInsert(47);
binarySearchTree.rInsert(21);
binarySearchTree.rInsert(76);
binarySearchTree.rInsert(18);
binarySearchTree.rInsert(27);
binarySearchTree.rInsert(52);
binarySearchTree.rInsert(82);

console.log("tree", binarySearchTree);

console.log(
  "min value of tree",
  binarySearchTree.minimumValueOfBST(binarySearchTree.root)
);
console.log(
  "min value of right subtree",
  binarySearchTree.minimumValueOfBST(binarySearchTree.root.right)
);
