// class Stack {
//     constructor() {
//         this.item = [];
//     }

//     isEmpty() {
//         return this.item.length == 0;
//     }

//     push(item) {
//         this.item.push(item);
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return 'stack is empty';
//         }
//         return this.item.pop();
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.item[this.item.length - 1];
//     }

//     size() {
//         return this.item.length;
//     }

//     list() {
//         return this.item;
//     }
//     clear() {
//         this.item = [];
//     }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());  // Output: 3
// console.log(stack.pop());   // Output: 3
// console.log(stack.size());  // Output: 2
// console.log(stack.isEmpty()); // Output: false
// stack.clear();
// console.log(stack.list());
// console.log(stack.isEmpty()); // Output: true

// stack using linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(data) {
        const newNode = new Node(data);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }
    size() {
        return this.length;
    }
    showList() {
        let current = this.top;
        let result = "";
        while (current) {
            result +=  current.data + (current.next!== null) ? " -> " : "";

             
            

            current = current.next;
        }
        return result;

    }
    peek() {
        return this.top.data;
    }


}

const stack = new Stack();

stack.push(30);
stack.push(2);
stack.push(3);
console.log(stack.showList());
console.log(stack.peek());
