const Node = require("../TNode");
const BinaryTree = require("../BinaryTree");
const LeafSum = require("./LeafSum");

test("Calculate sum of leaf nodes in a standard binary tree", () => {
    const tree = new BinaryTree();
    tree.root = new Node(9);
    tree.root.left = new Node(8);
    tree.root.right = new Node(12);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(17);
    tree.root.right.right = new Node(23);
    tree.root.left.left.right = new Node(4);
    const { sum, leaves } = LeafSum(tree.root);
    expect(sum).toBe(51);
    expect(leaves).toEqual([4, 7, 17, 23]);
});

test("Handle tree with negative leaf values", () => {
    const tree = new BinaryTree();
    tree.root = new Node(5);
    tree.root.left = new Node(-3);
    tree.root.right = new Node(8);
    tree.root.left.left = new Node(-10);
    tree.root.left.right = new Node(-1);
    const { sum, leaves } = LeafSum(tree.root);
    expect(sum).toBe(-3);
    expect(leaves).toEqual([-10, -1, 8]);
});
