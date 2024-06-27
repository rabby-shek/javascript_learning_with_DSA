// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);

    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

function deleteDuplicates(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move the first pointer n+1 steps ahead to maintain the gap of n nodes between first and second
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the end of the list
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from end
    second.next = second.next.next;

    return dummy.next; // Return the head of the modified list
};

// Example usage:
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let result = addTwoNumbers(l1, l2);

// Convert result to an array for easy viewing
function linkedListToArray(node) {
    let array = [];
    while (node !== null) {
        array.push(node.val);
        node = node.next;
    }
    return array;
}
console.log(removeNthFromEnd(head, 2));
