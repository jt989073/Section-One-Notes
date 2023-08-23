/* 
Write a function called printBreadthFirst that will traverse the given graph breadth-first, 
printing each node when visited exactly once, on a newline
*/

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
//   const visited = new Set()
//   visited.add(start)

//   const nodes = []

//   while(queue.length){
//     const curr = queue.shift()
//     const neighbors = adjList[curr]

//     nodes.push(curr)
//     neighbors.forEach(neighbor => {
//         if(!visited.has(neighbor)){
//             visited.add(neighbor)
//             queue.push(neighbor)
//         }
//     })
//   }

//   console.log(nodes)

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

// /*
// Write a function called printDepthFirst that will traverse the given graph depth-first, 
// printing each node when visited exactly once, on a newline.
// */

// // const adjList = {
// //   1: [2, 5],
// //   2: [1, 3, 5],
// //   3: [2, 4],
// //   4: [3, 5, 6],
// //   5: [1, 2, 4],
// //   6: [4],
// // };


// function printDepthFirst(start) {
//   // your code here
//   const stack = [start]
//   const visited = new Set([start])

//   while(stack.length){
//     const curr = stack.pop()
//     const neighbors = adjList[curr]
//     console.log(curr)
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

/* 
One of the most common uses of a breadth-first search is to find a shortest path from one node to another.
  Copy and paste your breadth-first search here and refactor it to use the technique from the reading.  
  If it is possible to reach end from start, return a shortest path.  Otherwise, return false.
*/


const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}


function aShortestPath(start, end) {
    // your code here
    const queue = [[start]]
    const visited = new Set([start])

    while(queue.length){
        const path = queue.shift()
        const node = path[path.length - 1]
        if(node === end) return path

        const neighbors = adjList[node]
        neighbors.forEach(neighbor => {
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push([...path, neighbor])
                // queue.push(neighbor)
            }
        })
    }
    return false
  }
  
  console.log("First Test:");
  console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
  console.log("Second Test:");
  console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
  console.log("Third Test:");
  console.log(aShortestPath(6, 1)); // -> false