class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insertion at the first of DLL
    addAtFirst(data) {
        if (this.size === 0) {
            const newNode = new Node(data);
            this.head = newNode;
            this.size++;
        }
        const newNode = new Node(data, null, this.head);
        this.head = newNode;
        this.size++;
    }

    // Insertion at the last of DLL
    addAtLast(data) {
        if (this.size === 0) {
            const newNode = new Node(data);
            this.head = newNode;
            this.size++;
        }
    }
    // Insertion at the Kth position
    // Insertion before value X
    // Insert after value X
    display() {
        if (this.size === 0) {
            throw new Error('Linked List is empty.');
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            process.stdout.write(String(currentNode.data) + '\t');
            currentNode = currentNode.next;
        }
        console.log();
    }
}

const dList = new DoublyLinkedList();
dList.addAtFirst(43);
dList.addAtFirst(31);
dList.addAtFirst(12);
dList.addAtFirst(98);
dList.display();
