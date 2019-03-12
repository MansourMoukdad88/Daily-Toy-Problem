// Given an array of negative / positive integers, return the element in 
// the center position of the array.
// If the array has an even number of elements, return the average of the two 
// middle elements instead.

function middle(numbers) {
    // Write your code here, and
    // return your final answer.
    var mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 !== 0) {
        return numbers[mid]
    } else {
        //    var evenMid = numbers[mid] + numbers[mid + 1]
        var newMid = (numbers[mid - 1] + numbers[mid]) / 2
        return newMid;
    }
}