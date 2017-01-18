'use strict';
/**
 * Implement a function that acts as a basic queue.
 * this queue should have the ability to 'drain', 'add', and 'remove' items.
 * the ordering of operations should ensure that the first item added is the first one out. (FIFO)
 *
 */

class Queue {
    constructor() {
        this.keys = [];
        this.items = {};
    }

    add(key, fn) {
        this.items[key] = fn;

        this.keys.push(key);
    }

    remove(key) {
        delete this.items[key];
    }

    get(key) {
        return this.items[key];
    }

    drain() {
        this.keys.forEach((key) => {
            this.get(key)();
            this.remove(key);
        });
    }

    getKeys() {
        return Object.keys(this.items);
    }
}

module.exports = Queue;
