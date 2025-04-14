class Heap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return [...this.heap]; // Private accessor
  }

  insert(value) {
    this.heap.push(value);
    let indexOfNodeToInsert = this.heap.length - 1;

    while (indexOfNodeToInsert > 0) {
      // Find the parent node
      const parentNodeIndex = Math.floor((indexOfNodeToInsert - 1) / 2);

      // if value in parent node is > than value, then swap
      if (value > this.heap[parentNodeIndex]) {
        let temp = this.heap[parentNodeIndex];
        this.heap[parentNodeIndex] = value;
        this.heap[indexOfNodeToInsert] = temp;

        indexOfNodeToInsert = parentNodeIndex;
      } else {
        --indexOfNodeToInsert;
      }
    }
  }
}

const myHeap = new Heap();

myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);
console.log("Heap", myHeap.getHeap());
myHeap.insert(100);
console.log("Heap", myHeap.getHeap());
myHeap.insert(75);

console.log("Heap", myHeap.getHeap());
