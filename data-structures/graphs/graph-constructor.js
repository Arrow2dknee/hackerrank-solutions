class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
      return true;
    }

    return false;
  }

  addEdge(vertexOne, vertexTwo) {
    if (this.list[vertexOne] && this.list[vertexTwo]) {
      this.list[vertexOne].push(vertexTwo);
      this.list[vertexTwo].push(vertexOne);
      return true;
    }

    return false;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (this.list[vertexOne] && this.list[vertexTwo]) {
      this.list[vertexOne] = this.list[vertexOne].filter(
        (v) => v !== vertexTwo
      );
      this.list[vertexTwo] = this.list[vertexTwo].filter(
        (v) => v !== vertexOne
      );

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    const vertexList = this.list[vertex];
    if (vertexList) {
      // for each vertices inside the vertex,
      // find out if the vertex to be removed exists in those vertices and remove them
      // assuming all vertices are bi-directional
      for (let i = 0; i < vertexList.length; i++) {
        const vertexToCheck = vertexList[i];
        this.removeEdge(vertex, vertexToCheck);
      }
      delete this.list[vertex];
      return true;
    }

    return false;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("C", "D");
myGraph.addEdge("B", "D");

console.log("graph", myGraph.list);

myGraph.removeVertex("F");
myGraph.removeVertex("D");

console.log("updated-graph", myGraph.list);
