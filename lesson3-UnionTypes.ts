

// type unions sample
type user = {
    id: string | number; //type union
    name: string;
    age: string;
}

function distanceFormula(rate: string|number, time: number): number {
    if(typeof rate === "string") {
        rate = parseFloat(rate);
    }
    return rate*time;
}

console.log(distanceFormula("15", 3.2));


function getOrderNumberInfo(id: string|number){
    if(typeof id === "string") {
        const parseID = id.split("-")[1];
        const numberID = parseInt(parseID);
        return numberID;
    }
    return id;
}

const orderInfo: string = "Chicken Inasal-042";


console.log("this is type: " + typeof orderInfo);
console.log(getOrderNumberInfo(orderInfo));


// ----- OPTIONAL PARAMETER + DEFAULT PARAMETERS -----


// OPTIONAL PARAMETERS
// using default parameters with optional parameter in 'instruction?'
export function makeSignage(standard: string = '2x3', instruction?: string) {
    instruction !== null ? console.log(`Make a signage of a ${standard} ${instruction}`) : console.log(`Make signage of a ${standard}.`);
}

makeSignage("3x10.");
makeSignage("3x5.", "The instructions are in the attatched file.");

// this function calculates API cost per request and the rates are intended as incentives for each contract.
export function calculateApiCost(numReqs: number, tier?: string) {
    if(tier == null) {
        return numReqs * .1;
    }
    if(tier.toLowerCase() === "pro") {
        return numReqs * .05;
    }
    if(tier.toLowerCase() === "enterprise") {
        return numReqs * .03;
    }
    return numReqs * .1; // always return default
}

let numberOfRequest = 10000;
console.log(`calculateApiCost() without passing an argument for tier sample of 100 request: ${calculateApiCost(100)}`);
console.log(`Api Cost for ${numberOfRequest} request is: $${calculateApiCost(numberOfRequest,"enterprise")}`)

export function getMessageStatus(statusCode: number) {
    switch(statusCode) {
        case 200:
            return "OK";
        case 404:
            return "Not Found";
        case 500:
            return "Server error occurred.";
        default:
            return "Unknown status.";
    }
}

console.log(`Server message status sample of 500: ${getMessageStatus(500)}`);

export function calculateSquarePerimeter(length?: number) {
    (length) ? console.log(`\nPerimeter: ${4*length}`) : console.log("\nError. Please pass in an argument.");
}

calculateSquarePerimeter(400);
calculateSquarePerimeter();


// DEFAULT PARAMETERS



// Since we have defined default values for each parameters there's no need to define explicit types
// This function does not only marks with a default(value and consequently, type) but also makes the parameter optional,
//  this means that you don't have to put a '?'.
export function estimateResponseTime(promptLength = 100, modelType = "text") {
    switch(modelType.toLowerCase()) {
        case "text":
            return `for text: ${0.01 * promptLength} seconds.`; // calculate time in seconds
        case "image":
            return `for image: ${0.02 * promptLength} seconds.`; // calculate time in seconds
        case "code":
            return `for code: ${0.05 * promptLength} seconds.`; // calculate time in seconds    }
    }
}

console.log("\n" + estimateResponseTime()); // 1-2 seconds for texts(default: 100 tokens).
console.log("\n" + estimateResponseTime(250, "image")); // 5 seconds for image.
console.log("\n" + estimateResponseTime(60, "code")); // 3 seconds for code.


// the paramaters themselves are already optional when defaulted.
estimateResponseTime();
estimateResponseTime(2030);
estimateResponseTime(290, "image");

export function newCharacter(name: string, role: string = "ranger"): string {
    const trimmedName = name.trim();

    // Regex: 
    // - Starts with uppercase letter
    // - Allows letters, ñ, hyphen
    // - Allows 2–4 total segments (like "Juan", "Juan-De", "Juan Dela Cruz")
    const nameRegex = /^[A-Z][a-zñ-]*(?:[ ][A-Z][a-zñ-]*){0,3}$/i;

    // implied falsy, null, undefined equally
    if (!trimmedName) {
        return "\nError: name cannot be empty.";
    }
    // compare trimmedName with nameRegex format
    if (!nameRegex.test(trimmedName)) {
        return "\nError: please enter a valid name (e.g., 'Juan Dela Cruz').";
    }

    return `\n${trimmedName} is a ${role.toLowerCase()}.`;
}
console.log(newCharacter("Mark Zuckerberg"));
console.log(newCharacter("Mark Zuckerberg Bill Gates Tyrant"));
console.log(newCharacter("Mark Zuckerberg Bill Gates"));
console.log(newCharacter("mark Zuckerberg."));

// LITERAL TYPE - unique to javascript, a powerful feature
// literal type allows you to not just define a string, number, or boolean but instead an actual value;
//  so for example, both a string could have a value of "John" only and not any other. (level: 1 | 2 | 3 | 4): "success" | "fail"
// It's called a literal types instead of a generic types, ie. string, number, boolean are generic types

// An example of Literal Type function is: A function that takes 3 specific string values as an argument. So a Union of different values.

// function aimTrajectory(radius: number, pi = Math.PI): number {
//     return radius/
// }
