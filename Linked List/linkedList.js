// Singly Linked List
class Node {
    constructor(data, next = null) {
        this.data = data; // here this -> one(object) will be replaced by object name
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first
    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // insert at last
    insertLast(data) {
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        let newNode = new Node(data);
        this.size++;
        temp.next = newNode;
        newNode = null;
    }

    // insert at index
    insertAtIndex(data, index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Index out of bound error, check the index.');
        }

        let temp = this.head;
        for (let i = 1; i < index; i++) {
            temp = temp.next;
        }
        const newNode = new Node(data);
        this.size++;
        newNode.next = temp.next;
        temp.next = newNode;
        temp = null;
    }

    // get first
    getFirst() {
        if (this.size < 0) {
            throw new Error('Linked List is empty.');
        }
        console.log(this.head.data);
    }

    // get last
    getLast() {
        if (this.size < 0) {
            throw new Error('Linked List is empty.');
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        console.log(temp.data);
    }

    // get at index
    getAtIndex(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bound error.');
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        console.log(temp.data);
    }

    // Deletion in Linked List
    deleteFirst() {
        if (this.size <= 0) {
            throw new Error("Linked List is empty, can't delete.");
        } else if (this.size === 1) {
            this.head = null;
            this.size--;
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    deleteLast() {
        if (this.size <= 0) {
            throw new Error("Linked List is empty, can't delete.");
        } else if (this.size === 1) {
            this.head = null;
            this.size--;
        } else {
            let temp = this.head;
            while (temp.next.next !== null) {
                temp = temp.next;
            }
            temp.next = null;
            this.size--;
        }
    }
    deleteAtIndex(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bound error.');
        }

        let temp = this.head;
        for (let i = 1; i < index; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
        temp = null;
        this.size--;
    }

    deleteWithValue(data) {
        if (this.size <= 0) {
            throw new Error('Index out of bound error.');
        } else if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
        } else {
            let temp = this.head;
            while (temp.next.next !== null && temp.next.data !== data) {
                temp = temp.next;
            }

            if (temp.next.next === null) {
                if (temp.next.data === data) {
                    temp.next = null;
                    temp = null;
                    this.size--;
                } else {
                    throw new Error(
                        "Provide data isn't in the linked list, try again."
                    );
                }
            } else {
                temp.next = temp.next.next;
                temp = null;
                this.size--;
            }
        }
    }
    // clear complete list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // print all list data
    display() {
        if (this.size <= 0) {
            throw new Error("Linked list is empty, can't display element.");
        }
        let temp = this.head;
        while (temp !== null) {
            process.stdout.write(String(temp.data) + '\t');
            temp = temp.next;
        }
        console.log();
    }
}

const list = new LinkedList();
list.insertFirst(23);
list.insertLast(100);
list.insertFirst(22);
list.insertFirst(10);
list.insertLast(200);
list.insertLast(333);
process.stdout.write('First element of Linked list is: ');
list.getFirst();
process.stdout.write('Last element of linked list is: ');
list.getLast();
list.deleteWithValue(10);
list.deleteWithValue(22);
list.display();
console.log('Size of the linked list is: ', list.size);
