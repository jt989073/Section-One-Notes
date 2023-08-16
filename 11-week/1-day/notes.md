## Lecture - Logarithms

The logarithm base-n of a number is how many times it must be divided
by n to reach 1.

- What is in the parenthesis are the length of the input
- The result of the function call is the worst case scenario for amount of
  comparisons

```js
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(4); // 2
Math.log2(8); // 3
Math.log2(16); // 4
Math.log2(32); // 5
Math.log2(64); // 6
Math.log2(128); // 7
Math.log2(256); // 8
Math.log2(512); // 9
Math.log2(1024); // 10

2 ** 0; // 1
2 ** 1; // 2
2 ** 2; // 4
2 ** 3; // 8
2 ** 4; // 16
2 ** 5; // 32
2 ** 6; // 64
2 ** 7; // 128
2 ** 8; // 256
2 ** 9; // 512
2 ** 10; // 1024
```

## Binary Search Readings & Practice (30 min)

## Tree Traversals
    - Pre-order traversal
        1. Print the current node value
        2. Recursively call the left subtree
        3. recursively call the right subtree
    
    - In-order Traversal
        1. Recursively call the left subtree
        2. Print the current node value
        3. Recursively call the right subtree

    - Post-order traversal
        1. Recursively call the left subtree
        2. Recursively call the right subtree
        3. Print the current node value

- Although pre-order, in-order and post-order traversals all print in different orders, the sequence that the nodes are visited doesn't change. Take a look at the following image with pre-order in red, in-order in green and post-order in blue.

- Although the nodes are printed in different order, the path each algorithm takes is the same: Starting from the root it walks down the left subtrees (pushing onto the call stack), then back up once the base case is reached (popping off the call stack), then down the right subtrees and back up again.


## Bredth First Traversal

- There is one main difference in a breadth first traversal and a depth first traversal
    - A breadth first traversal uses a queue
    - A depth first traversal uses a stack

```js
function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = [root]

    // While the queue is not empty
    while (queue.length > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        // DO THE THING
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
}

function depthFirstTraversal(root) {

    // Put the starting node on a stack
    const stack = [root];

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        // DO THE THING
        console.log(node.value);

        // Put all of the node's children on the top of the stack
        stack.push(node.left);
        stack.push(node.right);
    }
}
```

## Binary Search Discussion
Properties of a Binary Search Tree:

- The tree starts at the root
- nodes whose values are less than the current node go to the left
- nodes whose values are more than the current node go to the right
- Each node has three properties: value, left and right

## Binary Search Readings & Practice (30 min)

## Binary Search Discussion
```js
function searchBST(root, target) {

    if (root === null) return false;

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}


function searchIterativeBST(root, target) {

    let currentNode = root;

    while (currentNode !== null) {

        if (target === currentNode.value) return true

        else if (target < currentNode.value) currentNode = currentNode.left

        else currentNode = currentNode.right;
    }

    return false;

}
```

