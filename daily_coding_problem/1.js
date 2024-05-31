function problem1 (array, unknow, k = 0) {
    if (k >= array.length) return false
    for (let i = k + 1; i < array.length; i++) {
        if (array[i] + array[k] === unknow) return [true, `${array[i]} + ${array[k]} = ${unknow}`]
    }
    return problem1 (array, unknow, k + 1)
}
console.log(problem1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 39))