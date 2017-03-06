'use strict';

/** An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once; for example torchwood can be rearranged into doctorwho.

* Given array of words,find all anagrams and return.

* Strings contain lowercase(a-z) characters,uppercase characters(A-Z) and digits(0-9).
**/

module.exports = function(words){

    let result = [];
    const map = new Map();
    if(!Array.isArray(words) || words.length < 2)
        return result;

    words.forEach( (word,index,array) => {

        const sortedWord = word.split('').sort().join('');

        if(!map.has(sortedWord)){
            let wordArr = new Array();
            wordArr.push(word);
            map.set(sortedWord,wordArr);

        }else{

            map.get(sortedWord).push(word);

        }

    });

    for (let [key, value] of map) {
        if(value && value.length >= 2)
            result = result.concat(value);
    }

     return result;

}
