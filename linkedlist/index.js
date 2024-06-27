class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node at the beginning
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Append new data at the end
  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Append data at a specific index
  appendAt(data, index) {
    let newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;

    if (index < 0) throw new Error("Index must be a positive integer");

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    while (current) {
      if (count === index) {
        previous.next = newNode;
        newNode.next = current;
        return;
      }
      previous = current;
      current = current.next;
      count++;
    }

    if (count === index) {
      previous.next = newNode;
      this.tail = newNode;
      return;
    }

    throw new Error("Index out of bounds");
  }

  // Delete a node by data
  delete(data) {
    let current = this.head;
    let previous = null;

    // If the list is empty
    if (!current) {
      console.log("List is empty.");
      return;
    }

    // If the node to delete is the head
    if (current.data === data) {
      this.head = current.next;
      // If the list had only one node
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    // Traverse the list to find the node to delete
    while (current) {
      if (current.data === data) {
        previous.next = current.next;
        // If the node to delete is the tail
        if (!current.next) {
          this.tail = previous;
        }
        return;
      }
      previous = current;
      current = current.next;
    }

    console.log("Data not found.");
  }

  // Calculate the total length of the list
  listLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Find data by value
  findByData(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        console.log("Data found: ", current.data);
        return;
      }
      current = current.next;
    }
    console.log("Data not found.");
  }

  // Sort the list
  sortList() {
    if (!this.head || !this.head.next) return;

    let sorted = false;
    while (!sorted) {
      sorted = true;
      let current = this.head;
      let previous = null;
      while (current.next) {
        if (current.data > current.next.data) {
          sorted = false;
          if (previous) {
            let tmp = current.next;
            current.next = tmp.next;
            tmp.next = current;
            previous.next = tmp;
          } else {
            let tmp = current.next;
            current.next = tmp.next;
            tmp.next = current;
            this.head = tmp;
          }
          previous = current.next;
        } else {
          previous = current;
          current = current.next;
        }
      }
    }
  }

  // Reverse the list
  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;
    this.tail = this.head; // The head will become the tail after reversal

    while (current) {
      next = current.next; // Store next node
      current.next = previous; // Reverse the current node's pointer
      previous = current; // Move pointers one position ahead
      current = next;
    }

    this.head = previous; // Set the new head
  }

  // Traverse and show the list
  showList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }
}

// Example usage
const linkedList = new LinkedList();

