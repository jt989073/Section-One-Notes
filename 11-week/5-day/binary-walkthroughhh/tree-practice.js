const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  } else {
    return rootNode.val;
  }
}

function findMaxBST(rootNode) {
  // Your code here
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }
  return rootNode.val;
}

function findMinBT(rootNode) {
  // Your code here
  let minVal = rootNode.val;
  if (rootNode.left) {
    minVal = Math.min(minVal, findMinBT(rootNode.left));
  }
  if (rootNode.right) {
    minVal = Math.min(minVal, findMinBT(rootNode.right));
  }
  return minVal;
}

function findMaxBT(rootNode) {
  // Your code here
  let queue = [rootNode];
  let max = -Infinity;

  while (queue.length) {
    let current = queue.shift();
    // console.log(current.val)
    if (current.val > max) {
      max = current.val;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return max;
}

function getHeight(rootNode) {
  // Your code here
  if (!rootNode) return -1;

  if (!rootNode.left && !rootNode.right) return 0;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function balancedTree(rootNode) {
  // Your code here
  let queue = [rootNode];

  while (queue.length) {
    let curr = queue.shift();
    let leftHeight = getHeight(curr.left);
    let rightHeight = getHeight(curr.right);

    if (Math.abs(leftHeight - rightHeight) <= 1) {
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    } else return false;
  }

  return true;
}

// function countNodes(rootNode) {
//   // Your code here
//   if(!rootNode) return 0
//   return 1 + countNodes(rootNode.left) + countNodes(rootNode.right)
// }

// ternary expression          conditional ? return if true : return if false
const countNodes = (rootNode) =>
  !rootNode ? 0 : 1 + countNodes(rootNode.left) + countNodes(rootNode.right);

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null;
  let stack = [rootNode];

  while (stack.length) {
    let curr = stack.pop();
    if (
      (curr.left && curr.left.val === target) ||
      (curr.right && curr.right.val === target)
    ) {
      return curr;
    }
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  // return undefined
}

function inOrderPredecessor(rootNode, target, arr = []) {
  // Your code here
  if (!rootNode) return;
  inOrderPredecessor(rootNode.left, target, arr);
  arr.push(rootNode.val);
  inOrderPredecessor(rootNode.right, target, arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === target) return null;
    if (arr[i] === target) return arr[i - 1];
  }
  // pred = curr.val;
  // if (curr.left) stack.push(curr.left);
  // if (curr.right) stack.push(curr.right);
  // if (!curr.left) {
  //   return pred;
  // }
}
// }
// let curr = rootNode
// let stack = []
// let pred = null
// while(true){
//   if(curr){
//     stack.push(curr)
//     curr = curr.left
//   } else if(!curr && stack.length){
//     curr = stack.pop()
//     if(curr.val === target){
//       if(!pred) return null
//       return pred.val
//     }
//     pred = curr
//     curr = curr.right
//   }
// }

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);
  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;
  // Set target based on parent
  let targetNode
  let isLeft = false;

  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeft = true
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  }
  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    //may need another condition
    if (isLeft) parentNode.left = null;
    else parentNode.right = null;
  }
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  else if (targetNode.left && targetNode.right) {

    let pred = inOrderPredecessor(rootNode, target);

    deleteNodeBST(rootNode, pred);
    targetNode.val = pred;
  } else {
    if (targetNode.left) {
      if (isLeft) {
        parentNode.left = targetNode.left;
      } else {
        parentNode.right = targetNode.left;
      }
    } else {
      if (isLeft) {
        parentNode.left = targetNode.right;
      } else {
        parentNode.right = targetNode.right;
      }
    }
  }
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
