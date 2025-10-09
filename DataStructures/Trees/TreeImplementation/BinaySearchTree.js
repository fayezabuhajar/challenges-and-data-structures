const TNode = require("./TNode.js");

class BinarySearchTree {
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

  add(value) {
    try {
      if (value === undefined || value === null) {
        throw new Error("Cannot add null or undefined value.");
      }

      const newNode = new TNode(value); // ✅ fixed here

      if (this.root === null) {
        this.root = newNode;
        return;
      }

      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        } else {
          console.warn(`⚠️ Value '${value}' already exists in the tree.`);
          return;
        }
      }
    } catch (error) {
      console.error("❌ Error in add():", error.message);
    }
  }

  contains(value) {
    try {
      if (value === undefined || value === null) {
        throw new Error("Cannot search for null or undefined value.");
      }

      let current = this.root;
      while (current) {
        if (value === current.value) return true;
        current = value < current.value ? current.left : current.right;
      }
      return false;
    } catch (error) {
      console.error("❌ Error in contains():", error.message);
      return false;
    }
  }

  remove(value) {
    try {
      if (value === undefined || value === null) {
        throw new Error("Cannot remove null or undefined value.");
      }
      this.root = this._removeNode(this.root, value);
    } catch (error) {
      console.error("❌ Error in remove():", error.message);
    }
  }

  _removeNode(node, value) {
    try {
      if (!node) return null;

      if (value < node.value) {
        node.left = this._removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = this._removeNode(node.right, value);
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = this._findMin(node.right);
        node.value = minRight.value;
        node.right = this._removeNode(node.right, minRight.value);
      }
      return node;
    } catch (error) {
      console.error("❌ Error in _removeNode():", error.message);
      return node;
    }
  }

  _findMin(node) {
    try {
      if (!node) throw new Error("Cannot find minimum of null node.");
      while (node.left) node = node.left;
      return node;
    } catch (error) {
      console.error("❌ Error in _findMin():", error.message);
      return null;
    }
  }

 
}

module.exports = BinarySearchTree;
