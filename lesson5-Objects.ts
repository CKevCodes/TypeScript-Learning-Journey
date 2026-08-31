// NOTE LESSON 5: Objects

// NOTE Start of Section 1 - Object Literal Types
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

type Government = {
  tax: number;
  rate: number;
  floodControlPlan: number;
}

const citizenPays = {
  tax: 240,
  rate: 24,
}

export const taxCollecting = (taxed: Government) => {
  console.log(`This Person just paid for tax: ${taxed.tax}, rate: ${taxed.rate}, and floodControlPlan: ${taxed.floodControlPlan}`);
}

//The line below causes a Type Error
//Argument of type '{ tax: number; rate: number; }' is not assignable to parameter of type 'Government'.
  // Property 'floodControlPlan' is missing in type '{ tax: number; rate: number; }' but required in type 'Government'.
// console.log(taxCollecting(citizenPays));

// NOTE - this line will cause an ERROR: Object literal may only specify known properties
// pilot({ name: "Millenium Falcon", speed: 75, weapons: 4});


// NOTE Start of Section 3 - Optional Object Properties
type Superhero = {
  name: string;
  strength: number;
  cape?: boolean;
};

const superheroModel : Superhero = {
  name : "Alien X",
  strength : 350,
}

console.log(superheroModel);

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


export const findNumUniqueLabels = (formattedAddreses: string[]) => {
  const set = new Set(formattedAddreses);
  return set.size;
}

// NOTE Start of Section 7 - Maps
// NOTE are collections of key-value pairs with typeof [Object], you can specify the keys and values using type parameters <K,V>.

const podracerSpeeds = new Map<string, number>();

podracerSpeeds.set('Anaking Skywalker', 947);
podracerSpeeds.set('Sebulba', 941);

console.log(podracerSpeeds);

// NOTE this will yield an error "not assignable to property."
//podracerSpeeds.set('R2-D2', true);

// get the Map<string, string> represents filenames -> fileContents.
export const getFileLength = (files: Map<string, string>, filename: string) => {
  const file = files.get(filename)
  if (file == null) return 0;
  return new TextEncoder().encode(file).length;
}

// NOTE Start of Section 8 - Dynamic Keys
// These are useful if you want to let the user of this type use their own key names.
export type MailPreferences = {
  [key: string]: boolean;
}
// 'Record' in TypeScript is just essentially an object, and you can specify the types.
export type MailPreferences2 = Record<string, boolean>

const setPreference = (
  preferences: MailPreferences, 
  key: string,
  value: boolean,
) => {
  const exists = key in preferences;
  preferences[key] = value;
  return exists;
}

// NOTE As Const and Object.freeze
// NOTE We can use const for objects and arrays so that they can only have specific properties or values.

let z = "asjdl" as const;
// z = "zzzz"; Type Error
const x = "asjdl";

export const defaultPreference = {
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
} as const;
// NOTE you can never change or update the property values, and can always have specific values.
export const defaultPreference2 = Object.freeze({
  name: "Kreese",
  doNotDisturb: false,
  outOfOffice: false,
});
// NOTE you can only freeze these on top-level in objects, meaning the nested ones cannot be changed.

const colorsConst = ["red", "green", "blue"] as const
// colorsConst[3];


// NOTE Start of Section 9 - Satisfies
// NOTE validates that a value matched a specific type without changing the inferred type.
type B = { name: string; age: number };
const b: B = { name: "Kyle", age: 2 } as const satisfies B;
// NOTE this causes discrepancy making the 'as const' obsolete since we are casting the type of b to align with B this ignores the readonly feature.
const bb = { name: "Kyle", age: 2 } as const satisfies B;
// NOTE make sure that bb variable is readonly but also checks if the type meets the qualification of the type B


// NOTE Start of Section 10 - Function Overloads
// NOTE Allows you to have multiple definitions for the same functions(note polymorphism) with different parameters that you can pass along.
/*
export function formatEmployeeMessage(employee: string): string;

export function formatEmployeeMessage(employee: string, isNew: true, onboardedDate: Date): string;
*/
