//Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
//For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
[4000, 6000, 5000, 1000, 1000]

function problem9 (array, sums = [], i = 0, non_adjacent_numbers = array.slice(0, i - 1).concat(array.slice(i + 2, array.length))) {
    if (i === 0) non_adjacent_numbers = array.slice(2)
    if (array.length < 1) return sums
    sums.push(0)
    sums[i] += array[i]
    problem9(array = non_adjacent_numbers, sums)
    return sums
} 
console.log(problem9([4000, 6000, 5000, 1000, 1000]))