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
console.log(problem4([1, 6, 7, 8, 9, 10]))