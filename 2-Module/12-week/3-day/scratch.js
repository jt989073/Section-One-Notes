const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(node, matrix) {
    // Create an array to hold the valid neighbors
    const neighbors = []
    const [row, col] = node
    // UP:
        // Identify the node above the current node, if it exists
        // Push that node into the new array
    if(row > 0 && matrix[row -1][col] === 1){
        neighbors.push([row - 1, col])
    }
    // DOWN:
        // Identify the node below the current node, if it exists
        // Push that node into the new array
        if(row < matrix.length - 1 && matrix[row + 1][col] === 1){
            neighbors.push([row + 1, col])
        }
    // LEFT:
        // Identify the node to the left of the current node, if it exists
        // Push that node into the new array
        if(col > 0 && matrix[row][col - 1] === 1){
            neighbors.push([row, col - 1])
        }

    // RIGHT:
        // Identify the node to the right of the current node, if it exists
        // Push that node into the new array
        if(col < matrix[0].length - 1 && matrix[row][col + 1] === 1){
            neighbors.push([row, col + 1])
        }

    // Return the neighbors array
    return neighbors
}

// returns the correct neighbors from an internal node
console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// returns the correct neighbors from a corner node
// console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// // returns the correct neighbors from an edge node
// console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]