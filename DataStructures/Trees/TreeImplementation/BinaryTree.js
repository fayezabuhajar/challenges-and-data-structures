const TNode = require("./TNode.js");

class BinaryTree {
  constructor(root) {
    try {
      if (root === undefined || root === null) {
        this.root = null;
      } else {
        this.root = new TNode(root);
      }
    } catch (error) {
      console.error("❌ Error initializing tree:", error.message);
      this.root = null;
    }
  }

  insert(value) {
    try {
      if (value === undefined || value === null) {
        throw new Error("Cannot insert null or undefined value.");
      }

      const newNode = new TNode(value);

      if (!this.root) {
        this.root = newNode;
        return;
      }

      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          // Duplicate value
          console.warn(`⚠️ Value '${value}' already exists in the tree.`);
          break;
        }
      }
    } catch (error) {
      console.error("❌ Error inserting value:", error.message);
    }
  }

  insert2(value) {
    try {
      if (value === undefined || value === null)
        throw new Error("Cannot insert null or undefined value.");

      if (!this.root) {
        this.root = new TNode(value);
        return;
      }
      this.insertNodeHelper(this.root, value);
    } catch (error) {
      console.error("❌ Error in insert2:", error.message);
    }
  }

  insertNodeHelper(node, value) {
    try {
      if (!node) return;
      if (value < node.value) {
        if (!node.left) node.left = new TNode(value);
        else this.insertNodeHelper(node.left, value);
      } else if (value > node.value) {
        if (!node.right) node.right = new TNode(value);
        else this.insertNodeHelper(node.right, value);
      } else {
        console.warn(`⚠️ Duplicate value '${value}' ignored.`);
      }
    } catch (error) {
      console.error("❌ Error in insertNodeHelper:", error.message);
    }
  }

  preOrderTraversal(node = this.root, result = []) {
    try {
      if (!node) return result;
      console.log(node.value); // للطباعة فقط
      result.push(node.value); // لتجميع النتائج
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
      return result;
    } catch (error) {
      console.error("❌ Error during preOrderTraversal:", error.message);
      return [];
    }
  }

  inOrderTraversal(node = this.root, result = []) {
    try {
      if (!node) return result;
      this.inOrderTraversal(node.left, result);
      console.log(node.value);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
      return result;
    } catch (error) {
      console.error("❌ Error during inOrderTraversal:", error.message);
      return [];
    }
  }

  postOrderTraversal(node = this.root, result = []) {
    try {
      if (!node) return result;
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      console.log(node.value);
      result.push(node.value);
      return result;
    } catch (error) {
      console.error("❌ Error during postOrderTraversal:", error.message);
      return [];
    }
  }

  // Pretty print tree sideways 🌲
  print(node = this.root, prefix = "", isLeft = true) {
    try {
      if (!node) {
        console.log("🌱 (empty tree)");
        return;
      }

      if (node.right) {
        this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
      }

      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

      if (node.left) {
        this.print(node.left, prefix + (isLeft ? "    " : "│   "), true);
      }
    } catch (error) {
      console.error("❌ Error printing tree:", error.message);
    }
  }
}

module.exports = BinaryTree;
