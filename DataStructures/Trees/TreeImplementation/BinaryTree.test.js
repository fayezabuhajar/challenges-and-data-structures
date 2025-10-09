const BinaryTree = require("./BinaryTree.js");


test("Test pre order traversal", () => {
  const bT = new BinaryTree();
  bT.insert(9);
  bT.insert(3);
  bT.insert(7);
  bT.insert(15);
  bT.insert(12); 

  const preOrderResult = bT.preOrderTraversal();
  expect(preOrderResult).toEqual([9, 3, 7, 15, 12]);;
});

test("Test in order traversal", () => {
  const bT = new BinaryTree();
  bT.insert(9);
  bT.insert(3);
  bT.insert(7);
  bT.insert(15);
  bT.insert(12);

  const inOrderResult = bT.inOrderTraversal();
  expect(inOrderResult).toEqual([3, 7, 9, 12, 15]);
});

test("Test post order traversal", () => {
    const bT = new BinaryTree();
    bT.insert(9);
    bT.insert(3);
    bT.insert(7);
    bT.insert(15);
    bT.insert(12);

    const postOrderResult = bT.postOrderTraversal();
    expect(postOrderResult).toEqual([7, 3, 12, 15, 9]);
});
