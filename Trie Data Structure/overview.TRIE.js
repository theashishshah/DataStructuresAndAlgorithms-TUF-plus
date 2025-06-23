// ✅ Optional: Use Map for Better Performance(in some cases)
// You can replace the plain object with a Map for more consistent performance:


class TrieNode {
    constructor() {
        this.children = new Map();  // Map instead of object
        this.isEndOfWord = false;
    }
}

// 📌 Use Cases for Trie in JS
// Autocomplete

// Spell checking

// Search suggestions

// Prefix matching

// Dictionary lookup