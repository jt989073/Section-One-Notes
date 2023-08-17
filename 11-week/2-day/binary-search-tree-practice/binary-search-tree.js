// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {

    if(!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {

      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }

  }

  search(val) {

    let currentNode = this.root;

    while (currentNode) {
      if(val === currentNode.val) return true
      else if (val < currentNode.val) currentNode = currentNode.left
      else currentNode = currentNode.right
    }
    return false
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return

    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const queue = [this.root]
    while(queue.length){
      const current = queue.shift()
      console.log(current.val)

      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(curr = this.root) {
    // your code here
    const stack = [this.root]
    while(stack.length){
      const curr = stack.pop()
      console.log(curr.val)
      if(curr.left) stack.push(curr.left)
      if(curr.right) stack.push(curr.right)
    }
    // if(!curr) return
    // console.log(curr.val)
    // if(curr.right) this.depthFirstTraversal(curr.right)
    // if(curr.left) this.depthFirstTraversal(curr.left)
  }
}

// let bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// bst.inOrderTraversal()

module.exports = { BinarySearchTree, TreeNode };
