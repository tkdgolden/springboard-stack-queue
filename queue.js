/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        var node = new Node(val);
        node.next = null;
        if (this.first === null) {
            this.first = node;
        }
        else {
            var last = this.last;
            last.next = node;
        }
        this.last = node;
        this.size +=1;
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (this.first === null) {
            throw new Error;
        }
        var first = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = first.next;
        this.size -=1;
        return first.val;
    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        return this.first.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        return this.first === null;
    }
}

module.exports = Queue;
