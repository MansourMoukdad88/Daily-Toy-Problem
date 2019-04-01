// Write a stack.Once you’re done, implement a queue using two stacks to create FIFO behavior.
//The queue should not have any storage separate from its stacks.


var Stack = function () {
    var storage = [];

    this.push = function (element) {
        return storage.push(element);
    };

    this.pop = function () {
        return storage.pop();
    };

    this.size = function () {
        return storage.length;
    };
};

var s = new Stack()


var Queue = function () {

    /*  var inbox = new Stack();
      var outbox = new Stack();
    */
    var storage = [];
    this.enqueue = function (element) {
        return storage.push(element)

    };

    this.dequeue = function () {
        return storage.shift()
    };

    this.size = function () {
        return storage.length;
    };
};

