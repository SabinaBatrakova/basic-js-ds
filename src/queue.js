const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.items = [];
  }
  getUnderlyingList() {
    let result = null;
    for (let i = this.items.length - 1; i >= 0; i--) {
      result = { value: this.items[i], next: result };
    }
    return result;
  }

  enqueue(value) {
    this.items.push(value); //в конец
  }

  dequeue() {
    return this.items.shift(); //убираем с начала
  }
}

module.exports = {
  Queue,
};
