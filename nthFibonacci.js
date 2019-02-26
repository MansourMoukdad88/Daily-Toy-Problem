// nthFibonacci
// Suppose a newly - born pair of iguanas, one male, one female, 
//are put in a large aquarium.

// Iguanas are able to mate at the age of one month so that at the end of its second
// month a female can produce another pair of iguanas.

// Suppose that our iguanas never die and that the female always produces one new 
//pair(one male, one female) every month from the second month on.


// Note: do not change the function signature to `function nthFibonacci(n) {}`
// It will cause the last test to fail!

nthFibonacci = function (n) {
    var arr = [0, 1];
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    for (var i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
};