const findSecondMax = require("./findSecondMaxValue");
const BinaryTree = require("../BinaryTree");
const Node = require("../TNode");

const Btree = new BinaryTree();

Btree.root = new Node(10);
Btree.root.left = new Node(5);
Btree.root.right = new Node(20);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.right = new Node(15);
Btree.root.right.right.right = new Node(25);

let secondMax = findSecondMax(Btree.root);
console.log("Second Maximum Value:", secondMax);
