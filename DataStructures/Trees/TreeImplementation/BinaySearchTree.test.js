const BinarySearchTree = require("./BinaySearchTree.js");


test("Add nodes and check contains()", () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
    bst.add(3);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(15)).toBe(true);

    // تحقق من قيمة غير موجودة
    expect(bst.contains(999)).toBe(false);
  });

test("Remove nodes and check contains()", () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
    bst.add(3);

    bst.remove(3);
    expect(bst.contains(3)).toBe(false);

    bst.remove(5);
    expect(bst.contains(5)).toBe(false);

    bst.remove(10);
    expect(bst.contains(10)).toBe(false);

    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

test("Adding duplicate values does not crash and keeps tree intact", () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(10); // مكرر
    bst.add(5);
    bst.add(5);  // مكرر

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
  });
