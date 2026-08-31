// NOTE Tuples is special kind of array, where each position has a specific, known type.

// NOTE Tuples are essentially just arrays with as const.
// NOTE `return ["we_can", 23] as const;`

// NOTE Start Section 1 - Tuples
// NOTE Most of the time tuples are used constantly by function and library authors to return multiple values in a very strict order.
export function createTicket(prevTicket: number, comment: string): [number, string, boolean] {
  return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}

const [number, string, boolean] = createTicket(1, "sdf"); // extract the number, string and boolean

// NOTE Start of Section 2 - Readonly
// NOTE Tuples have a weird situation in TS where the fact that they are actually Arrays, tuple types can sometimes be bypassed with .push() method ignoring type errors.
const nameAndAge: [string, number] = ["Montana Jones", 30];
nameAndAge.push("Kyle Magtanggol");

// NOTE Using the 'readonly' key in declarations. We can prevent such cases where errors occur like above.
const nameAndAge2: readonly [string, number] = ["Nathan", 26];
// nameAndAge2.push("Donna") // Push does not exist on type readonly...


// NOTE Start of Section 3 - Destructuring Tuples.

function getName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0], parts[1]];
}

const [firstName, lastName] = getName("Frodo Baggins");

type CustomerWithFood = [string, { cuisine: string, from: string }];

const customerData: CustomerWithFood = [
  "Benit",
  { cuisine: "Grizzed Steak", from: "Steak Spot" },
];

const [customerName, { cuisine, from }] = customerData;
console.log(`${customerName} Ordered ${cuisine} from ${from}.`);

// NOTE Start of Section 3 - Named Tuples
// NOTE Used only for documentation, has no impact on compilers, no impact on the runtime, this is purely for documentation, intellisense

type UserData = readonly [string, number, boolean]; // NOTE What is this string, number, boolean for? You can't clearly define what are the types are for is in your UserDate

type UserDataLabeled = readonly [name: string, age: number, isAdmin: boolean]; // NOTE You can use this Named Tuple instead where the string is a name, number is an age, boolean is an isAdmin.

// NOTE Another example of Named/Labeled Tuple
export type Ticket = readonly [id: number, comment: string, label: string];

export function formatTicket(ticket: Ticket) {
  // NOTE if you hover around the destructured variables you can see what types are the variables are being extracted
  const [comment, label, id] = ticket;
  return `#${id} ${comment} [${label}]`;
}

// NOTE Another example of Named Tuples
export type FoodOrder = [number, string, number];

export const buyOrder = (order: FoodOrder) => {
  const [orderId, orderLabel, orderQuantity] = order;

  function getOrderId() {
    return orderId;
  }

  function getOrderDetails() {
    return `${orderLabel} x ${orderQuantity}`;
  }

  function calculateTotal(price: number) {
    return price * orderQuantity;
  }
  
  return {
    getOrderId,
    getOrderDetails,
    calculateTotal
  };
};
// NOTE when calling nested functions the function you just instantiated called must return an object containing the function themselves so you could access functions as if the are methods, otherwise it would yield a type error in which it would return a void.
// NOTE Why this works?
const buyNow = buyOrder([123, "matcha", 3]);
console.log(buyNow.getOrderDetails());
// console.log(buyNow.calculateTotal(240));