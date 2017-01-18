'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
let flatten = require('../questions/flatten');

describe('Flatten', () => {
    it('should return a single array length total of array that contains sub-arrays ', (done) => {
        const mockArray = [
            'one',
            'two',
            [
                'apple',
                'orange'
            ],
            'five'
        ];

        const arrayResults = flatten(mockArray);

        expect(arrayResults.length).to.equal(5);

        done();
    });

//What else could we test here?
});
