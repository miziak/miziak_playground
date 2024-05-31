//Implement an autocomplete system. That is, given a query string s and a set of all possible query strings,
//return all strings in the set that have s as a prefix.
//For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

function problem11 (string, setOfStrings, wordInSet = 0, result = []) {
    if (wordInSet === setOfStrings.length) return result
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== setOfStrings[wordInSet][i]) break
        if (i === string.length - 1) result.push(setOfStrings[wordInSet])
    }
    return problem11(string, setOfStrings, wordInSet + 1, result)
}
console.log(problem11('del', ['dog', 'deer', 'deal', 'delulu', 'dictionary', 'dab', 'concert', 'delma']))