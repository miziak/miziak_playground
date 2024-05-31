//Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
//For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
[4000, 6000, 5000, 1000, 1000]

function problem9 (array, sums = []) {
    let restIntegers = []
    
    for (let i = 0; i < array.length; i++) {
        let zmienna = array.slice(0, i).concat(array.slice(i + 1, array.length))
        console.log(zmienna)
    }
}
console.log(problem9([1, 2, 3, 4]))
//                 0        1       2       3           4
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 5))