'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
let debounce = require('../questions/debounce');

describe('Debounce', () => {
    it('should work with a single input', (done) => {
        const cb = sinon.spy();

        debounce(cb, 350, false);

        setTimeout(() => {
            expect(cb.called).to.equal(true);
            done();
        }, 400);
    });

    it('should only execute once on multiple calls', (done) => {
        const cb = sinon.spy();

        debounce(cb, 300, false);
        debounce(cb, 300, false);
        debounce(cb, 300, false);

        setTimeout(() => {
            expect(cb.calledOnce).to.equal(true);

            done();
        }, 400);
    });

    it('should execute immediately if immediate == true', (done) => {
        const cb = sinon.spy();

        debounce(cb, 150, true);
        debounce(cb, 200, true);
        debounce(cb, 250, true);

        expect(cb.calledThrice).to.equal(true);
        done();
    });
});
