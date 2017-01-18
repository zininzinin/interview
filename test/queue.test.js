'use strict';

let expect = require('chai').expect;
let Queue = require('../questions/Queue');

describe('Queue', () => {
    it('should create an empty queue when instantiated', () => {
        const queue = new Queue();

        expect(queue.getKeys().length).to.equal(0);
    });

    it('should add an item to the queue', () => {
        const queue = new Queue();

        queue.add('first', () => {
        });

        expect(queue.getKeys().length).to.equal(1);
    });

    it('should remove an item from the queue', () => {
        const queue = new Queue();

        queue.add('first', () => {
        });
        queue.add('second', () => {
        });
        queue.add('third', () => {
        });
        queue.remove('second');

        expect(queue.getKeys().length).to.equal(2);
    });

    it('should drain function called from queue after executed', () => {
        const queue = new Queue();

        queue.add('first', () => {
            console.log('first');
        });
        queue.add('second', () => {
            console.log('second');
        });
        queue.add('third', () => {
            console.log('third');
        });
        queue.drain();

        expect(queue.getKeys().length).to.equal(0);
    });

// What else could we test here?
});
