//Given an array of integers, return a new array such that each element at index i of the new array is the product
//of all the numbers in the original array except the one at i.
//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//Follow-up: what if you can't use division?

function problem2 (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let integralStorage = array[i]
        let readyIntegral = 1
        array[i] = 1
        for (let k = 0; k < array.length; k++) {
            readyIntegral = readyIntegral * array[k]
            result[i] = readyIntegral
        }
        array[i] = integralStorage
    }
    return result
}

console.log(problem2([1, 2, 3, 4, 5]))

function betterProblem2 (array, result = []) {
    for (let i = 0; i < array.length; i++) {
        let rest = array.slice(0, i).concat(array.slice(i + 1, array.length))
        let product = 1
        for (let k = 0; k < rest.length; k++) {
            product *= rest[k]
        }
        result.push(product)
    }
    return result
}

console.log(betterProblem2([1, 2, 3, 4, 5]))

function easiestProblem2 (array, result = [], number = 0) {
    if (number === array.length) return result
    let toPush = 1
    for (let i = 0; i < array.length; i++) {
        toPush *= array[i]
    }
    result.push(toPush/array[number])
    return easiestProblem2 (array, result, number + 1)
}

console.log(easiestProblem2([1, 2, 3, 4, 5]))