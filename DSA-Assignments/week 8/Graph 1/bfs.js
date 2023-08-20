function bfsTraversal(graph, startNode) {
  const visited = new Array(graph.length).fill(false);
  const queue = [];

  visited[startNode] = true;
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
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
const startNode = parseInt(prompt("Enter the start node: "));
const graph = parseInput(inputStr);
bfsTraversal(graph, startNode);
