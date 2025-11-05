function LeafSum(root) {
    try {
        if (!root) {
            return 0;
        }

        let sum = 0;
        let leaves = [];


        function traverse(node) {
            if (!node) return;
            if (!node.left && !node.right) {
                sum += node.value;
                leaves.push(node.value);
            }
            traverse(node.left);
            traverse(node.right);
        }
        traverse(root);
        return { sum, leaves };
    } catch (error) {
        console.error("❌ Error in LeafSum():", error.message);
        return { sum: 0, leaves: [] };
    }
}

module.exports = LeafSum;