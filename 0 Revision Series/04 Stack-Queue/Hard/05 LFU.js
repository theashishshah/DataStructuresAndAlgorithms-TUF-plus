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




class Node {
    constructor(key = -1, value = -1) {
        this.key = key
        this.value = value
        this.count = 1 // because when node will be created first time, its freq will be 1
        this.next = null
        this.prev = null
    }
}

class List {
    constructor() {
        this.size = 0
        this.head = new Node()
        this.tail = new Node()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    remove(node) {
        let nextNode = node.next
        let prevNode = node.prev

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


var LFUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map() // [[key, node], [key, node]...upto capacity]
    this.fmap = new Map() // [[fre, list], [fre, list] .... ]
    this.freq = 0

};

LFUCache.prototype.update = function (node) {
    // remove this node from both the maps to update count, value, and add into other list
    this.map.delete(node.key)
    this.fmap.get(node.count).remove(node)

    // after removing this, if there is no one in the list of min freq, update the min freq
    if (node.count === this.freq && this.fmap.get(node.count).size === 0) this.freq++

    let list = new List()  // I'll have a new list, if in just count+1, i'll not get list then use this one
    if (this.fmap.has(node.count + 1)) {
        list = this.fmap.get(node.count + 1)
    }

    node.count++
    list.insert(node)
    this.map.set(node.key, node)
    this.fmap.set(node.count, list)

};
LFUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    this.update(node)
    return node.value
};

LFUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.value = value
        this.update(node)
        return
    }

    if (this.capacity === this.map.size) {
        // delete the lru
        const lruList = this.fmap.get(this.freq)
        this.map.delete(lruList.tail.prev.key)
        lruList.remove(lruList.tail.prev)
    }

    this.freq = 1
    // if at min freq we've list then update the list else insert new list at this min freq
    let list = new List()
    if (this.fmap.has(this.freq)) {
        list = this.fmap.get(this.freq)
    }
    const newNode = new Node(key, value)
    list.insert(newNode)
    this.fmap.set(this.freq, list)
    this.map.set(key, newNode)

};
