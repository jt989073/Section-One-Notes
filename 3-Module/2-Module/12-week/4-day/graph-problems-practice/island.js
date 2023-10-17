function getNeighbors(row, col, graph) {
  const neighbors = []

  const rows = graph.length
  const columns = graph[0].length
  // Check top
  if(row > 0 && graph[row - 1][col] === 1){
    neighbors.push([row - 1, col])
  }
  // Check bottom
  if(row < rows - 1 && graph[row + 1][col] === 1){
    neighbors.push([row + 1, col])
  }
  // Check left
  if(col > 0 && graph[row][col - 1] === 1){
    neighbors.push([row, col - 1])
  }
  // Check right
  if(col < columns - 1 && graph[row][col + 1] === 1){
    neighbors.push([row, col + 1])
  }
  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set()
  // Create a stack, put the starting node in the stack
  const stack = []
  stack.push([row, col])
  // Put the stringified starting node in visited
  visited.add(`${row},${col}`)
  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while(stack.length){
    // Pop the first node
    const curr = stack.pop()
    console.log(curr)
    const currentRow = curr[0]
    const currentCol = curr[1]
    
    // DO THE THING (increment size by 1)
    if(graph[currentRow][currentCol] === 1) size++

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    const neighbors = getNeighbors(currentRow, currentCol, graph)

    neighbors.forEach(neighbor => {
      const stringCord = `${neighbor[0]},${neighbor[1]}`
      if(!visited.has(stringCord)){
        visited.add(stringCord)
        stack.push(neighbor)
      }
    })
  }
  // return size
  return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];