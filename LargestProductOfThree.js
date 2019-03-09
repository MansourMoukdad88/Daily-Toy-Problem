// Write a function that accepts an array of integers and returns the
//  largest product possible from three of those numbers.

function largestProductOfThree(arr) {
    // Write your code here, and
    // return your final answer.
    var sortedNums = arr.slice().sort(function (a, b) {
        return a - b;
    });
    var n = sortedNums.length;
    var firstProduct = sortedNums[0] * sortedNums[1] * sortedNums[n - 1];
    var lastProduct = sortedNums[n - 3] * sortedNums[n - 2] * sortedNums[n - 1];
    return Math.max(firstProduct, lastProduct);
}
