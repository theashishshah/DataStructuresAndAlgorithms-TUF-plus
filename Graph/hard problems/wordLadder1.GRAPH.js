class Solution {
    wordLadderLength(startWord, targetWord, wordList) {
        const hash = new Set(wordList)
        hash.delete(startWord)

        const queue = []
        queue.push([startWord, 1])

        while (queue.length) {
            const [word, level] = queue.shift()
            if (word === targetWord) return level

            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const tempWord = word.substring(0, i) + String.fromCharCode(j + 97) + word.substring(i + 1)
                    if (hash.has(tempWord)) {
                        hash.delete(tempWord)
                        queue.push([tempWord, level + 1])
                    }
                }
            }
        }
        return 0
    }
}
