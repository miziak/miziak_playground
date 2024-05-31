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

