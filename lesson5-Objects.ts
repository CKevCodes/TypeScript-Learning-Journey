// NOTE LESSON 5: Objects

//NOTE Start of Section 1 - Object Literal Types
// NOTE This can be useful in auto-complete and code refactoring, in practical applications you often pass objects to functions and it will sometimes become tedious having to manually type everything that needs to be typed, so why not use this instead?
export type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
}

export const processMail = (mail: Mail) => {
  return `
  FROM: ${mail.from}
  TO: ${mail.to}
  SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
  BODY: ${mail.body}
  `;
}

// NOTE Start of Section 2 - Extra Properties
// NOTE If you pass objects to functions with a defined type you can pass in extra properties for that functions, so no problemo if you forgot to type every values being passed down, BUT SO LONG AS THE Objects passed to functions contain the Properties of the TYPE you wouldn't have any errors!
type Spaceship = {
  name: string;
  speed: number;
};
// object falcon
const falcon = {
  name: "Millennium Falcon",
  speed: 75,
  weapons: 4,
};

export const pilot = (ship: Spaceship) => {
  console.log(`Piloting ${ship.name} at ${ship.speed} lighspeed.}`);
}
// NOTE This is a useful technique because it helps you filter out properties inside objects that you might not need if you pass that object to a function that would not even use some of the object's properties. Like in this example, where weapons exists inside the falcon object but is not used by the pilot. Also note that it is also useful in some cases where you passed in a hard-coded object which has mispellings.
pilot(falcon);
// NOTE - this line will cause an ERROR: Object literal may only specify known properties
// pilot({ name: "Millenium Falcon", speed: 75, weapons: 4});


// NOTE Start of Section 3 - Optional Object Properties
type Superhero = {
  name: string;
  strength: number;
  cape?: boolean;
};


// NOTE Start of Section 4 - Empty Object Type
// NOTE INSIGHT: Everything in JavaScript is an object under the hood, every single thing in JavaScript is built on top of an object.
/*
  // NOTE for example.
  const a = "";
  a.toLowerCase();
  */

// Another Example.
let newUser = {}
// Property 'name' does not exist on type '{}'
// newUser.name = "Lane";

console.log(typeof newUser);

// NOTE the lesson key take-away here is that whenever you're working with objects in TypeSctipt always remember that you have to assign a type for it so that TypeScript would know that you are using an object 'blueprint'.


// NOTE Start of Section 5 - Discriminated Unions
// NOTE A discriminated unions essentially just tells you which type you are dealing with in object types. In this case discriminated or tagged unions can be identified with a 'kind' tag
type MultipleChoiceLesson = {
  kind: "multiple-choice";
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding"; // Discriminant property
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoiceLesson | CodingLesson;

export const isCorrect = (lesson: Lesson): boolean => {
  switch(lesson.kind) {
    case "multiple-choice":
      return lesson.studentAnswer === lesson.correctAnswer;
    case "coding":
      return lesson.studentCode === lesson.solutionCode;
  }
}


// NOTE Start of Section 6 - Sets
// NOTE TypeScript has a built-in types for sets, which are collections of unique values. You can ensure that all the values in the set are of the same type by specifying a type parameter: <T>
const set = new Set<string>();
set.add("loml");
set.add
console.log(set.entries());



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
