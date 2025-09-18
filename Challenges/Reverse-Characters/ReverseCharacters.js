function ReverseCharacters(str) {
// Convert the string to an array of characters
    const charArray = str.split('');

// Initialize pointers
    let left = 0;
    let right = charArray.length - 1;

// Swap characters until the pointers meet in the middle
    while (left < right) {
        // Swap characters at left and right pointers
        const temp = charArray[left];
        charArray[left] = charArray[right];
        charArray[right] = temp;    
// Move the pointers towards the center
        left++;
        right--;
    }
// Convert the array back to a string and return

    return charArray.join('');
}

// Example usage:

console.log(ReverseCharacters("javascript")); // Output: tpircsavaj
console.log(ReverseCharacters("elyts")); // Output: style
console.log(ReverseCharacters("nadroj")); // Output: jordan
console.log(ReverseCharacters("abc564")); // Output: 465cba

module.exports = ReverseCharacters;
