'use strict';

const expect = require('chai').expect;
const anagram = require('../questions/anagram');


describe('Anagram basic functionality',()=>{

    it('should return empty array if length is less than 1 or null',() => {
        let emptylist = [];
        let result = anagram(emptylist);
        expect(result).to.deep.equal([]);
    });

    it('should return only anagrams given an array of words', () => {
        let wordlist = ['silent','doctorwho','torse','torchwood','listen'];
        expect(anagram(wordlist)).to.deep.equal(['silent','listen','doctorwho','torchwood']);
    });
});
