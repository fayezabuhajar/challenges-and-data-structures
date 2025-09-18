function MinmumValue(arr) {
    if (arr.length === 0) return null;

    let min = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [3, 5, 1, 8, -2, 7];
console.log(MinmumValue(arr1)); // Output: -2

let arr2 = [4, 2, 5, 8, -2, -7];
console.log(MinmumValue(arr2)); // Output: -7

let arr3 = [4, 2, 5, 8, 2, 7];
console.log(MinmumValue(arr3)); // Output: 2



module.exports = MinmumValue;