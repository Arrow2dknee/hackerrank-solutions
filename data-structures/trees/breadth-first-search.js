import { BST } from "./binary-search-tree";

function BFS() {
  const binaryTree = new BST();
  binaryTree.insert(47);
  binaryTree.insert(21);
  binaryTree.insert(76);
  binaryTree.insert(18);
  binaryTree.insert(27);
  binaryTree.insert(52);
  binaryTree.insert(82);

  let currentNode = binaryTree.root;
  let queue = [];
  let results = [];

  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    results.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return results;
}

console.log("BFS traversal", BFS());
