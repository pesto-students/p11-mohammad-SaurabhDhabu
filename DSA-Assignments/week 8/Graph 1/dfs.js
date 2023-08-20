function dfsTraversal(graph, node, visited) {
  visited[node] = true;
  console.log(node);

  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfsTraversal(graph, neighbor, visited);
    }
  }
}

function parseInput(inputStr) {
  const graph = [];
  const rows = inputStr.trim().split(";");

  for (const row of rows) {
    const adjList = row.split(",").map(Number);
    graph.push(adjList);
  }

  return graph;
}

const inputStr = prompt("Enter the graph as an adjacency list: ");
const graph = parseInput(inputStr);
const startNode = 0; // You can change this to the desired start node
const visited = new Array(graph.length).fill(false);

dfsTraversal(graph, startNode, visited);
