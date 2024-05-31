// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.

// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)

// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.

// Matches should be case-insensitive, and the words in the result should be lowercased.

// Ties may be broken arbitrarily.

// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

function topThreeWords(text) {
    if (typeof(text) !== 'string') return []
    const arrayOfWords = text.toLowerCase().split('').filter(element => element.charCodeAt(0) == 32 || element.charCodeAt(0) == 39 
    || element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123).join('').split(' ')
    
    const seen = new Map()
    arrayOfWords.forEach(word => {
        if (!seen.has(word) && word != '' && word != `'`) seen.set(word, 1)
        else {
            if (word != '' && word != `'`) {
                let amount = seen.get(word)
                seen.set(word, amount + 1)
            }
        }
    })
    let result = []
    const entriesArray = Array.from(seen.entries())
    entriesArray.sort((a, b) => b[1] - a[1])
    const top3Keys = entriesArray.slice(0, 3).map(entry => entry[0])
    return top3Keys
}
console.log(topThreeWords(`  '  `))