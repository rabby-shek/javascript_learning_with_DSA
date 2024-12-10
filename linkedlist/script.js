// linked list practice
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    // add a node to the end of the list
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }

    }

    insertAtStart(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    pop() {
        if (!this.head) return null;
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) return null;
        let newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        } else {
            let current = this.head;
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
            this.length++;
        }

    }

    includes(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    size() {
        return this.length;
    }

}



const linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(3)
linkedList.insertAtStart(1)
linkedList.pop();
console.log(linkedList.includes(2));
