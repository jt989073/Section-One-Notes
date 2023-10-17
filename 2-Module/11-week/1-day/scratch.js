class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function breadthFirstTraversal(root) {

  // Put the starting node in a queue
  const queue = [root]

  // While the queue is not empty
  while (queue.length > 0) {

      // Dequeue a node and print it
      let node = queue.shift();
      // DO THE THING
      if(node) console.log(node.val);

      // Put all of the node's children in the back of the queue
      queue.push(node.left);
      queue.push(node.right);
  }
}

// console.log(breadthFirstTraversal(a))


function depthFirstTraversal(root) {

  // Put the starting node on a stack
  const stack = [root];

  // While the stack is not empty
  while (stack.length > 0) {

      // Pop a node and print it
      let node = stack.pop();
      // DO THE THING
      console.log(node.val);

      // Put all of the node's children on the top of the stack
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
  }
}

console.log(depthFirstTraversal(a))

//gonzo test
