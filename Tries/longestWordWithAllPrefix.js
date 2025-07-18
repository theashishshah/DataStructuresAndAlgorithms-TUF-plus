class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }

    hasChild(char) {
        return this.children[char.charCodeAt(0) - 97] !== null;
    }

    addChild(char, node) {
        this.children[char.charCodeAt(0) - 97] = node;
    }

    getChild(char) {
        return this.children[char.charCodeAt(0) - 97];
    }

    markEnd() {
        this.isEndOfWord = true;
    }

    isEnd() {
        return this.isEndOfWord;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word 
     */
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.hasChild(char)) {
                currentNode.addChild(char, new TrieNode());
            }
            currentNode = currentNode.getChild(char);
        }
        currentNode.markEnd();
    }

    /**
     * Checks if all prefixes of a word exist and are valid words in the Trie.
     * @param {string} word 
     * @returns {boolean}
     */
    allPrefixesExist(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.hasChild(char)) return false;

            currentNode = currentNode.getChild(char);
            if (!currentNode.isEnd()) return false;
        }
        return true;
    }
}

class Solution {
    /**
     * Returns the longest word such that all prefixes of the word exist in the input list.
     * If no such word exists, returns "None".
     * @param {string[]} words 
     * @returns {string}
     */
    completeString(words) {
        const trie = new Trie();

        // Insert all words into the Trie
        for (const word of words) {
            trie.insert(word);
        }

        let longestWord = "";

        // Check each word to see if it's complete (all prefixes exist)
        for (const word of words) {
            if (trie.allPrefixesExist(word)) {
                if (
                    word.length > longestWord.length ||
                    (word.length === longestWord.length && word < longestWord)
                ) {
                    longestWord = word;
                }
            }
        }

        return longestWord === "" ? "None" : longestWord;
    }
}
