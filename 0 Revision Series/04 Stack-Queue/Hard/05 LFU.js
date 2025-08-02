class Node {
    constructor(key = -1, value = -1) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
        this.count = 1
    }
}

class List {
    constructor() {
        this.size = 0 // To check how many are there in curr list
        this.head = new Node()
        this.tail = new Node()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    remove(node) {
        const nextNode = node.next
        const prevNode = node.prev

        nextNode.prev = prevNode
        prevNode.next = nextNode
        this.size--
    }

    insert(node) {
        const nextNode = this.head.next
        nextNode.prev = node
        node.next = nextNode

        this.head.next = node
        node.prev = this.head
        this.size++
    }

}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.minFreq = 0
        this.currSize = 0

        this.map = new Map() //
        this.freqMap = new Map() // at this freq, who's starting node 
    }

    updateFreq(node) {
        this.map.delete(node.key)
        this.freqMap.get(node.count).remove(node)

        if (node.count === this.minFreq && this.freqMap.get(node.count).size === 0) {
            this.minFreq++
        }

        let nextHFList = new List()
        if (this.freqMap.has(node.count + 1)) {
            nextHFList = this.freqMap.get(node.count + 1)
        }

        node.count += 1
        nextHFList.insert(node)

        this.freqMap.set(node.count, nextHFList)
        this.map.set(node.key, node)

    }

    get(key) {
        if (!this.map.has(key)) return -1
        const node = this.map.get(key) // node 
        this.updateFreq(node)
        return node.value
    }

    put(key, value) {
        // check if key already exist or not
        if (this.map.has(key)) {
            const node = this.map.get(key)
            node.value = value
            this.updateFreq(node)
            return
        }

        if (this.capacity === this.map.size) {
            const list = this.freqMap.get(this.minFreq)
            this.map.delete(list.tail.prev.key)
            this.freqMap.get(this.minFreq).remove(list.tail.prev)
            this.currSize--
        }

        this.currSize++
        this.minFreq = 1
        let list = new List()
        if (this.freqMap.has(this.minFreq)) {
            list = this.freqMap.get(this.minFreq)
        }
        const node = new Node(key, value)
        list.insert(node)
        this.map.set(key, node)
        this.freqMap.set(this.minFreq, list)
    }
}