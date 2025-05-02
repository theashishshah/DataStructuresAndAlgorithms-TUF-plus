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

    // Insertion at the first of DLL ✅
    addAtFirst(data) {
        const newNode = new Node(data);
        if (this.head !== null) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
        }
        this.size++;
    }

    // Insertion at the last of DLL ✅
    addAtLast(data) {
        const newNode = new Node(data);
        if (this.head !== null) {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            currentNode.next = newNode;
            currentNode = null;
        } else {
            this.head = newNode;
        }
        this.size++;
    }
    // Insertion at the Kth position ✅
    addAtKth(data, position) {
        if (position <= 0 || position > this.size + 1) {
            throw new Error('Index out of bound Error, Try again.');
        } else if (position === 1) {
            const newNode = new Node(data);
            if (this.head === null) {
                this.head = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else {
            const newNode = new Node(data);
            if (this.head !== null) {
                let currentNode = this.head;
                for (let i = 1; i < position - 1; i++) {
                    currentNode = currentNode.next;
                }
                newNode.next = currentNode.next
                newNode.prev = currentNode
                currentNode.next = newNode
            } else {
                this.head = newNode;
            }
        }
        this.size++;
    }
    // Insertion before value X 
    addBeforeX(data, value){
        if(this.size <= 0){
            throw new Error("Empty Linked List. Add element first.")
        }
        
    }
    // Insert after value X
    display() {
        if (this.size === 0) {
            throw new Error('Linked List is empty.');
        }
        let currentNode = this.head;
        while (currentNode !== null) {
            process.stdout.write(String(currentNode.data) + '\t');
            currentNode = currentNode.next;
        }
        // currentNode = this.head;
        // while (currentNode !== null) {
        //     console.log(currentNode);
        //     currentNode = currentNode.next;
        // }
        console.log();
    }
}

const dList = new DoublyLinkedList();
// dList.addAtFirst(43);
// dList.addAtFirst(31);
// dList.addAtLast(21);
// dList.addAtLast(89);
dList.addAtKth(90, 1)
dList.addAtKth(320, 1)
console.log(dList.size)
dList.display();
// console.log(dList)
