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

  // add new node in first
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // append new data in the end
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

  // calculating the total length of the list
  listLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  // find data by id
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

  sortList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    list.push(current);
    return list.sort();
  }

  // traversing and showing the list
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

const likedList = new LinkedList();



