function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const stack = [[row, col]]
  const visited = new Set([[row, col].toString()])
  let count = 0
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  while(stack.length){
    count++
    const curr = stack.pop()
    let neighbors = getNeighbors(curr[0], curr[1], graph)
    for(let i = 0; i < neighbors.length; i++){
      const neighbor = neighbors[i]
      if(!visited.has(neighbor.toString())){
        visited.add(neighbor.toString())
        stack.push(neighbor)
      }
    }
  }
  return count
}
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here

module.exports = [getNeighbors, islandSize];
