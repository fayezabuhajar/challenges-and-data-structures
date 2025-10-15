const Node = require('../TNode');
const findSecondMax = require('./findSecondMaxValue');
const BinaryTree = require('../BinaryTree');


test('Find second maximum in a standard binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(15);
    tree.root.right.right.right = new Node(25);
    const secondMax = findSecondMax(tree.root);
    expect(secondMax).toBe(20);
});



test('Handle tree with only one node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    const secondMax = findSecondMax(tree.root);
    expect(secondMax).toBeNull();
}
);



test('Handle tree with negative and positive values', () => {
    const tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-20);
    tree.root.right = new Node(0);
    tree.root.left.left = new Node(-30);
    tree.root.left.right = new Node(-15);
    tree.root.right.right = new Node(10);
    tree.root.right.right.right = new Node(5);
    const secondMax = findSecondMax(tree.root);
    expect(secondMax).toBe(5);
});



test('Handle tree with multiple maximum values', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(20);
    tree.root.right = new Node(30);
    tree.root.left.left = new Node(15);
    tree.root.left.right = new Node(25);
    tree.root.right.right = new Node(30);
    const secondMax = findSecondMax(tree.root);
    expect(secondMax).toBe(25);
});

test("Handle tree with multiple second maximum values", () => {
  const tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(20);
  tree.root.right = new Node(25);
  tree.root.left.left = new Node(15);
  tree.root.left.right = new Node(25);
  tree.root.right.right = new Node(30);
  const secondMax = findSecondMax(tree.root);
  expect(secondMax).toBe(25);
});



