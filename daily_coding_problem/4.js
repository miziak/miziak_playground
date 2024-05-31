//Given an array of integers, find the first missing positive integer in linear time and constant space.
//In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
//For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

function problem4 (array) {
    let smallestPositiveNumber = Infinity
    let aLittleLess = null
    let aLittleMore = null
    let result
    for (let i = 0; i < array.length; i++) { //znajdowanie najmniejszej liczby w tablicy
        if (array[i] < smallestPositiveNumber && array[i] > 0) smallestPositiveNumber = array[i]
    }
    for (let k = 1; ;k++) {
        if (!array.includes(smallestPositiveNumber + k)) aLittleMore = smallestPositiveNumber + k
        if (aLittleMore !== null) break
    }
    for (let p = 1; ;p++) {
        if (!array.includes(smallestPositiveNumber - p)) aLittleLess = smallestPositiveNumber - p
        if (aLittleLess !== null) break
    }
    if (aLittleLess < aLittleMore && aLittleLess > 0) return aLittleLess
    return aLittleMore
}
console.log(problem4([1, 2, 0]))