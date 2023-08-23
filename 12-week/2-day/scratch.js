// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4],
// };

// function printBreadthFirst(start) {
//   // your code here
//   const queue = [start]
//   const visited = new Set([start])
//   const nodes = []

//   while(queue.length){
//     const curr = queue.shift()
//     nodes.push(curr)
    
//     const neighbors = adjList[curr]
//     neighbors.forEach(neighbor => {
//         if(!visited.has(neighbor)){
//             visited.add(neighbor)
//             queue.push(neighbor)
//         }
//     })
//   }
//   return nodes
// }

// console.log("First Test:");
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:");
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:");
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  4, 3, 5, 6, 2, 1

// function printDepthFirst(start) {
//   // your code here
//   const stack = [start]
//   const visited = new Set()
//   visited.add(stack)

//   while(stack.length){
//     const curr = stack.pop()
//     console.log(curr)
//     const neighbors = adjList[curr]
//     neighbors.forEach(neighbor => {
//         if(!visited.has(neighbor)){
//             visited.add(neighbor)
//             stack.push(neighbor)
//         }
//     })
//   }
// }

// console.log("First Test:");
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:");
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:");
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// // One possible solution:  4, 6, 5, 2, 1, 3


const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

// function aShortestPath(start, end) {
//   // your code here
//   const queue = [[start]]
//   const visited = new Set([start])
//   const newArr = []

//   while(queue.length){
//     const path = queue.shift()
//     const curr = path[path.length - 1]
//     // solution for degrees of seperation
//     // if(curr === end) return path.length - 1
    
//     // solution for aShortestPath
//     if(curr === end) return path

//     const neighbors = adjList[curr]
//     neighbors.forEach(neighbor => {
//         // if(neighbor === target) newArr.push(neighbor)
//         if(!visited.has(neighbor)){
//             visited.add(neighbor)
//             queue.push([...path, neighbor])
//         }
//     })
//   }
//   return newArr.length
// }

function aShortestPathRecursive(queue, visited, end) {
    if (queue.length === 0) {
      return []; // No more paths to explore
    }
  
    const path = queue.shift();
    const curr = path[path.length - 1];
  
    // solution for aShortestPath
    if (curr === end) {
      return path;
    }
  
    const neighbors = adjList[curr];
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    });
  
    return aShortestPathRecursive(queue, visited, end);
  }
  
  function aShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set([start]);
  
    return aShortestPathRecursive(queue, visited, end);
  }

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false