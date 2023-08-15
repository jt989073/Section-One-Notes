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

console.log(searchBST(a, 3));
console.log(searchIterativeBST(a, 1))
// console.log(a)
