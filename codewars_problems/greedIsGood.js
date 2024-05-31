function score( dice ) {
    let diceRolls = dice
    let sidesCounter = new Map()
    diceRolls.forEach(side => {
      if (!sidesCounter.has(side)) sidesCounter.set(side, 1)
      else {
        let amount = sidesCounter.get(side)
        sidesCounter.set(side, amount + 1)
        }
    })
    let score = 0
    for (let [key, value] of sidesCounter) {
        if (key === 1 && value < 3) score += value * 100
        if (key === 1 && value >= 3) score += 1000 + ((value - 3) * 100)
        if (key === 5 && value < 3) score += value * 50
        if (key === 5 && value >= 3) score += 500 + ((value - 3) * 50)
        if (key !== 1 && key !== 5 && value >= 3) score += key * 100
    }
    return score
}
console.log(score ([5, 2, 2, 2, 1]))
