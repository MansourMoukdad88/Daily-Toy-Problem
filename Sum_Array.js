/* Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers
 in it.A single array item will count as a contiguous sum.
 */

 function sumArray(array) {
    // Write your code here, and
    // return your final answer.
    if (array.length === 0) {
        return;
    }

    var current = array[0];
    var max = array[0];
    array.splice(0, 1);

    for (let i = 0; i < array.length; i++) {
        current = Math.max(current + array[i], array[i]);
        max = Math.max(current, max);
    }
    return max;
}
