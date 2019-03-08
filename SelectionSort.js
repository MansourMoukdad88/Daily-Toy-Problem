// Selection sort is a sorting algorithm, specifically an in -place comparison sort which repeatedly selects the next - smallest element and swaps it into place.

// For the first iteration, we find the smallest element in the array and swap it with the first element in the array.
// On the second iteration, we find the next smallest element in the array and swap it with the second element in the array.
// etc.
// Implement a function that takes an array and sorts it using this technique.
// NOTE: DO NOT use JavaScript’s built -in sorting function (Array.prototype.sort)

function selectionSort(arr) {
    // TODO
    var smallest;
    for (var i = 0; i < arr.length; i++) {
        smallest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j
            }
        }
        if (smallest !== i) {
            var swap = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = swap
        }
    }
    return arr
}