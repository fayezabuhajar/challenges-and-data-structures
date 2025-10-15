function findSecondMaxValue(root) {
  try {
    if (!root || (!root.left && !root.right)) {
      return null; // لازم يكون على الأقل عنصرين مختلفين
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    function traverse(node) {
      if (!node) return;

      // تحديث القيم
      if (node.value > max) {
        secondMax = max;
        max = node.value;
      } else if (node.value < max && node.value > secondMax) {
        secondMax = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(root);

    return secondMax === -Infinity ? null : secondMax;
  } catch (error) {
    console.error("❌ Error in findSecondMaxValue():", error.message);
    return null;
  }
}

module.exports = findSecondMaxValue;
