/*
    Types/Interfaces can be used to act as a blueprint for Functions,
    this allows expected return values to align to 
    how that blueprint(types/interfaces) is structured and how its
    pre-typed fields are defined and used in functions to 
    enable consistent code across functions.
*/


// Start of Explicit Types

// undefined age
/*
    - I've noticed that Union Types is useful in 
    defining type/interface to guide functions to 
    expect a formatted object for functions in special cases like
    how age in this case can be a number or undefined.
*/
// Case 1


type Human = {
    name: string;
    age: number | undefined;
}
function getHuman(isHuman: boolean): Human {
    let age;

    if(isHuman) {
        age = 0;
    }

    return {
        name: "John",
        age,
    };
}

let human = getHuman(false);

console.log(human);

// Case 2
/*
    if you want to strictly return age as a number in which it should be, 
    then pre-defining its type in this case, Human2, is effective. However, 
    errors can appear when the function in which the type is being used 
    causing a typed error if the age in that function is 
    assigned but not yet defined causing a possible undefined value.
*/
type Human2 = {
    name: string;
    age: number;
}
function getHuman2(isHuman: boolean): Human2 {
    let age;

    if(isHuman) {
        age = 0; // assign age with 0 value if only the boolean is true
    }
    else { // this else clause can help with unassigned age value.
        age = -1;
    }

    return {
        name: "Doe",
        //age, // will return an error since age can be 'number | undefined' which was unassigned.
        age
    }
}
let human2 = getHuman2(false);
console.log(human2.name)

// Practical Cases
/*
    Special Case
    - When working with real world projects, the fact that some variables can 
    inadvertently cause an error, we could catch by using a Nullish Coalescing '??' 
    to provide a default value to possible undefined cases.

    - This function will return the safePrice, safeQuantity and safeDiscount, 
    to handle undefined cases, so we use the safe variables 
    with a Nullish Coalescing '??' to assign a default value if undefined.
*/
export function calculateTotal(
    price: number,
    quantity: number,
    discount: number
): number {

    const safePrice = price ?? 0; // if undefined assign a value anyway
    const safeQuantity = quantity ?? 1;
    const safeDiscount = discount ?? 0;
    return safePrice * safeQuantity * (1 - safeDiscount);
}

console.log(`This is the total: PHP ${calculateTotal(200, 3, .20)}.`);


// It easier to ignore typed numbers if it is inside a function that returns a string.
export function personObject(
    name: string,
    age: number | undefined,
    discount: number | undefined
): string {
    return `
        The person's name is ${name} 
        and age is ${age}, with a discount of
        ${discount}%.
    `;
}

//console.log(personObject("John Doe", undefined, undefined));
console.log(personObject("John Doe", 20, 10));


// Fun Case

// type/interface class formatter, like a blueprint
type Character = {
    name: string;
    level: number;
};

// interface Character {
//     name: string;
//     level: number;
// };

// expected to return an object with a type Character
function getCharacter(boss: boolean): Character {
    //let level; // level is any type
    let name: string;
    let level: number;

    if (boss) {
        name = "Dragon"
        level = 99;
    } else {
        name = "Goblin"
        level = 0;
    }

    return {
        name: name,
        level,
    };
}

let goblin = getCharacter(false);
goblin.level += 1; // add 1 level to goblin object

console.log(goblin.level + 1); //only gets the value of object goblin
console.log(goblin);

console.log();
let dragon = getCharacter(true);
console.log(`The Dragon is level ${dragon.level}.`);
console.log(dragon);

// Very Practical Case of using Explicit Types
function validateOrder(order: any): 200|400|500 {
    switch(order){
        // client-side error.
        case !order: return 400;
        case order.total<0: return 400;
        case order.items?.length === 0: return 400;
        case !order.paymentInfo: return 500;
        case order.customer?.status === "banned": return 400;
        case order.paymentInfo.tokenExpired: return 500;
        
        // limit order.
        case order.total > 10000: return 500;

        // all good.
        default: return 200;
    }
}



/*
    Pros of using Explicit Types:
    1) Author-Intended return type 
        - "The author wrote this function to purposely return a specific type of value."
    2) Prevents contract screw-ups 
        - this means that other parts of your code should follow a specific type/interface
*/

// End of Explicit Types









// Start of Implicit Types


function getValidAge(isValidAge: number) {
    if(isValidAge > 17) {
        return "Welcome."
    }
    return "too young."
    // the inferred type is very specific it's either 'welcome' or 'too young'
    // you could type the getValidAge as getValidAge(isValidAge: number): string but
    // you are essentially casting it to a wider type and the specific type is now lost.

    /*
        Pros of using Implicit Types:
        1) Inferred type can implicitly mean only one or more 
            return type defined in the function.
        2) Less typing.

        Cons:
        1) Unrestricted typing.
    */
}

let getAge

// another example
function combineMessage(systemMsg: string, userMsg: string) {
    return `${systemMsg}\n${userMsg}`
    // This well return 
}

console.log(combineMessage("hi","system"));
// advance case how functions are implemented inside types.
type User = {
    name: string;
    greet(): void;
    //greet: () => void;
};

const user: User = {
    name: "Johnny",
    greet: () => {
        console.log(`Hello ${user.name}!`);
    }
};

user.greet();

export function logSystemEvenet(event: string, severity: "info"|"warning"|"error"){
    console.log(`System ${severity.toUpperCase}: ${event}.`);
}


// lesson: function types
const add = (a:number, b:number) => a+b;

console.log(add(3,5));

// lesson: Type Alias - allows us to create a type that has a type but with a new name.
// essentially just making a new Object.

type StudentId = string;
type StudentName = string;
type StudentYear = number;
type StudentContactNumber = string;

type Student = {
    id: StudentId;
    name: StudentName;
    year: StudentYear;
    contactNumber: StudentContactNumber;

    greet: () => void;
}

function createStudent(id: string, name: string, year:number, contactNumber: string):Student {

    if(!/^24\d{5}-(1|2)$/.test(id)) {
        throw new Error("Invalid id.");
    }
    if(!/^[A-Za-zÀ-ÿ' -]{2,100}$/.test(name)) {
        throw new Error("Invalid Name.");
    }
    if(!(year >= 1 || year <= 10)) {
        throw new Error("Invalid Year Level.");
    }
    if(!/^09\d{9}$/.test(contactNumber)) {
        throw new Error("Contact must be in a valid format!");
    }
    return {
        id,
        name,
        year,
        contactNumber,
        greet() {
            console.log(`The student ${name}, with an id: ${id}, and year level is ${year} that has a contact number of ${contactNumber}.`);
        }
    }
}

const student1 = createStudent("2420030-1", "Clark", 1, "09345678910");

student1.greet();

// Create and export a new Car function type.
// CarDetail is a function that takes a string(model) and returns a string.

export type Car = (name: string) => string;

export function newCar(name: string): Car {
    return "car";
}