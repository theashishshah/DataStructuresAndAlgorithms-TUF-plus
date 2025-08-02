class Node {
    constructor(key = -1, value = -1) {
        this.value = value
        this.key = key
        this.prev = null
        this.next = null
    }
}

var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new Node()
    this.tail = new Node()

    // Make the connection between head and tail
    this.head.next = this.tail // [[head] -> [tail]] 
    this.tail.prev = this.head // [[head] <- [tail]]
};

LRUCache.prototype.deleteNode = function (node) {
    const prevNode = node.prev
    const nextNode = node.next

    // Point prev to next and vice-versa
    prevNode.next = nextNode
    nextNode.prev = prevNode
    return
}

LRUCache.prototype.insertNode = function (node) {
    const nextNode = this.head.next
    nextNode.prev = node
    node.next = nextNode

    this.head.next = node
    node.prev = this.head
    return
}

LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)
    this.deleteNode(node)
    this.insertNode(node)
    return node.value
};

LRUCache.prototype.put = function (key, value) {
    // Check if you already has or not
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.value = value
        this.deleteNode(node)
        this.insertNode(node)
        return
    }

    // If you don't have and capacity is already full
    if (this.capacity === this.map.size) {
        // I've to  delete the LRU
        const lruNode = this.tail.prev
        this.map.delete(lruNode.key)
        this.deleteNode(lruNode)
    }

    const newNode = new Node(key, value)
    this.map.set(key, newNode)
    this.insertNode(newNode)
    return
};



class Node {
    constructor(key = -1, value = -1) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.head = new Node()
    this.tail = new Node()
    this.map = new Map()

    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype.delete = function (node) {
    const nextNode = node.next
    const prevNode = node.prev
    prevNode.next = nextNode
    nextNode.prev = prevNode

};

LRUCache.prototype.insert = function (node) {
    const nextNode = this.head.next
    nextNode.prev = node
    node.next = nextNode

    this.head.next = node
    node.prev = this.head

    return
};
LRUCache.prototype.get = function (key) {
    // First check if you have or not?
    if (!this.map.has(key)) return -1

    const currentNode = this.map.get(key)
    this.delete(currentNode)
    this.insert(currentNode)
    return currentNode.value
};

LRUCache.prototype.put = function (key, value) {
    // If key already exist then, update the value and make LRU
    if (this.map.has(key)) {
        const currentNode = this.map.get(key)
        currentNode.value = value
        this.delete(currentNode)
        this.insert(currentNode)
        return
    }

    if (this.capacity === this.map.size) {
        // delete the lru
        const lruNode = this.tail.prev
        this.map.delete(lruNode.key)
        this.delete(lruNode)
    }

    const newNode = new Node(key, value)
    this.map.set(key, newNode)
    this.insert(newNode)
    return
};
