class Node {
    constructor() {
        this.links = new Array(26).fill(null)
        this.end = 0
        this.count = 0
    }

    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 97] !== null
    }

    put(ch, node) {
        this.links[ch.charCodeAt(0) - 97] = node
    }

    get(ch) {
        return this.links[ch.charCodeAt(0) - 97]
    }

    increaseCount() {
        this.count++
    }

    increaseEnd() {
        this.end++
    }
    decreaseCount() {
        this.count--
    }

    decreaseEnd() {
        this.end--
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for (const ch of word) {
            if (!node.containsKey(ch)) {
                // you've to add a new node
                node.put(ch, new Node())
            }
            node = node.get(ch)
            // node.count++
            node.increaseCount()
        }
        node.increaseEnd()
    }

    countWordsEqualTo(word) {
        let node = this.root
        for (const ch of word) {
            if (!node.containsKey(ch)) return 0
            node = node.get(ch)
        }
        return node.end
    }

    countWordsStartingWith(prefix) {
        let node = this.root
        for (const ch of prefix) {
            if (!node.containsKey(ch)) return 0
            node = node.get(ch)
        }
        return node.count
    }

    erase(word) {
        let node = this.root
        for (const ch of word) {
            if (!node.containsKey(ch)) return
            else {
                node = node.get(ch)
                node.decreaseCount()
            }
        }
        node.decreaseEnd()
    }
}

/*
 * Your Trie object will be instantiated and called as such:
 * let obj = new Trie();
 * obj.insert(word);
 * let param_2 = obj.countWordsEqualTo(word);
 * let param_3 = obj.countWordsStartingWith(prefix);
 * obj.erase(word);
 */