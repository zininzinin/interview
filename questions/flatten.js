'use strict';
/**
 * Write a function that accepts a multi dimensional array and returns a flattened version.
 *
 * @param  {Array} set  the multidimensional array to flatten
 */

module.exports = function (set) {
    let newArray = [];

    function iterate(arry) {
        for (let i = 0, len = arry.length; i < len; i++) {
            const item = arry[i];

            if (Array.isArray(item)) {
                iterate(item);
            } else {
                newArray.push(item);
            }

        }
        return newArray;
    }

    return iterate(set);
};
