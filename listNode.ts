// Definition for singly-linked list.
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry > 0) {
        const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
}

/**
 * Traverses a linked list and prints its values cleanly to the console.
 */
function printLinkedList(head: ListNode | null): void {
    let curr = head;
    const values: number[] = [];

    // Loop through every node until we hit the end (null)
    while (curr !== null) {
        values.push(curr.val); // Save the current node's value
        curr = curr.next;      // Shift the pointer to the next node
    }

    // Format 1: Visual arrow chain
    const visualChain = values.length > 0 
        ? values.join(" → ") + " → null" 
        : "null";

    // Format 2: Array style
    const arrayStyle = `[${values.join(", ")}]`;

    console.log("Visual Format:", visualChain);
    console.log("Array Format :", arrayStyle);
}

// l1 = [2, 7, 1, 1]
const l1_case1 = new ListNode(2);
l1_case1.next = new ListNode(4);
l1_case1.next.next = new ListNode(3);

// l2 = [5, 1]
const l2_case1 = new ListNode(5);
l2_case1.next = new ListNode(6);
l2_case1.next.next = new ListNode(4);

// Plug it in:
const result1 = addTwoNumbers(l1_case1, l2_case1);

printLinkedList(result1);
