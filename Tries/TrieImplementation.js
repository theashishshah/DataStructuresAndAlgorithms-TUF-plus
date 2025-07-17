class Node{
    constructor(){
        this.links = new Array(26).fill(null)
        this.flag = false
    }

    containsKey(ch){
        return this.links[ch.charCodeAt(0) - 97] !== null
    }

    put(ch, node){
        this.links[ch.charCodeAt(0) - 97] = node
    }

    get(ch){
        return this.links[ch.charCodeAt(0) - 97]
    }

    setEnd(){
        this.flag = true
    }

    isEnd(){
        return this.flag
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root // I'm at the root obj of trie which has two property accessible
        // root.links, root.flag
        for(const ch of word){
            if(!node.containsKey(ch)){
                node.put(ch, new Node)
            }
            node = node.get(ch)
        }
        node.setEnd()
    }

    search(word) {
        let node = this.root
        for(const ch of word){
            if(!node.containsKey(ch)) return false
            node = node.get(ch)
        }

        return  node.isEnd()
    }

    startsWith(prefix) {
        let node = this.root
        for(const ch of prefix){
            if(!node.containsKey(ch)) return false
            node = node.get(ch)
        }
        return true
    }
}
