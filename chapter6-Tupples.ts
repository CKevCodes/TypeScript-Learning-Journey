// NOTE Tuples is special kind of array, where each position has a specific, known type.

// NOTE Tuples are essentially just arrays with as const.
// NOTE `return ["we_can", 23] as const;`

// NOTE Start Lesson 1 - Tuples
// NOTE Most of the time tuples are used constantly by function and library authors to return multiple values in a very strict order.
export function createTicket(prevTicket: number, comment: string): [number, string, boolean] {
  return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}

const [number, string, boolean] = createTicket(1, "sdf"); // extract the number, string and boolean

// NOTE Start of Lesson 2 - Readonly
// NOTE Tuples have a weird situation in TS where the fact that they are actually Arrays, tuple types can sometimes be bypassed with .push() method ignoring type errors.
const nameAndAge: [string, number] = ["Montana Jones", 30];
nameAndAge.push("Kyle Magtanggol");

// NOTE Using the 'readonly' key in declarations. We can prevent such cases where errors occur like above.
const nameAndAge2: readonly [string, number] = ["Nathan", 26];
// nameAndAge2.push("Donna") // Push does not exist on type readonly...


// NOTE Start of Lesson 3 - Destructuring Tuples.

function getName(fullName: string): [string, string, string] {
  const parts = fullName.split(" ");
  return [parts[0], parts[1], parts[2]];
}

const [firstName, ...lastName] = getName("Frodo Baggins");

console.log(firstName);
console.log(lastName);

// NOTE Another Example
type CustomerWithFood = [string, { cuisine: string, from: string }];

const customerData: CustomerWithFood = [
  "Benit",
  { cuisine: "Grizzed Steak", from: "Steak Spot" },
];

const [customerName, { cuisine, from }] = customerData;
console.log(`${customerName} Ordered ${cuisine} from ${from}.`);

// NOTE Start of Lesson 3 - Named Tuples
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
// NOTE FoodOrder is a Named Tuples
export type FoodOrder = [number, string, number];

// NOTE The idea behind this relates to Factory Function, that also encompassess closure concept in TS, demonstrating an Function-based Encapsulation
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
// NOTE when calling nested functions the function you just binded must return an object containing the function themselves so you could access functions as if the are methods, otherwise it would yield a type error in which it would return a void.
// NOTE Why this works?
// NOTE Because functions themselves return undefined objects by default,
const buyNow = buyOrder([123, "matcha", 3]);
console.log(buyNow.getOrderDetails());
// console.log(buyNow.calculateTotal(240));

// NOTE Just Side way of another example of factory function
const user = (name: string, isAdmin: boolean) => {
  let role = "";

  isAdmin ? role = "Admin" : role = "Employee";
  
  function getRole() {
    return `${role}`;
  }
  function getName() {
    return `${name}`
  }

  return { getRole, getName };
};

const user1 = user("Bob", false);

console.log(user1.getRole());
// NOTE Class Based function to demonstrate Encapsulation with private fields
class User {
  private name;
  private isAdmin;
  constructor(name: string, isAdmin: boolean) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
  get Name(){
    return this.name;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return 3*3;
  }
}

const us1 = new User("Bob", true);
console.log(us1.Name);
console.log(us1.area);

// NOTE Start of Lesson 4 - Optional Elements in Tuples
// NOTE Like object properties you can make tuple elements optional using the ? modifier

// NOTE 'readonly' so that you won't accidentally use response.push[some_data] on tupples!
type HttpResponse = readonly [statusCode: number, data: string, error?: string];

const successResponse : HttpResponse = [200, "Success!"];
const errorResponse: HttpResponse = [404, "", "Resource not found"];

console.log(successResponse);
console.log(errorResponse);

// NOTE Start of Lesson 5 - 