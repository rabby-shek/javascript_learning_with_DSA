class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // calculating the total length of the list
  listLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    console.log(count);
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

  // traversing and showing the list
  showList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    list.push(current);
    console.log(list);
  }
}

const likedList = new LinkedList();

likedList.append(4);
likedList.append(5);
likedList.append(45);
likedList.append(34);
likedList.showList();

