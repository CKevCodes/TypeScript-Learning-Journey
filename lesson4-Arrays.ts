// Lesson 4 - Arrays in TypeScript!


// Start of Section 1
// Passing arrays inside parameters in Functions
// CASE 1: Using arrays in parameters in TS
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const trainAutobots = async (autobots: string[]) => {
  for(let bots of autobots) {
    console.log(`Training ${bots}...`);

    await sleep(3000);
  }
}

trainAutobots(["Orion Pax Silica", "Megatron", "Bumble Humvee"]);

export const averageScore = (ratings: number[]) => {
  if (ratings.length === 0) return 0;
  return ratings.reduce((rating, sum) => {
    return sum += rating;
  }, 0) /ratings.length;
}

console.log(averageScore([1, 2, 3]));


// CASE 2: Two Sums

function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map();
    for (let i = 0; i<nums.length; i++) {
        const res: number = target - nums[i];
        if(numMap.has(res)) {
            return [numMap.get(res), i];
        }
        numMap.set(nums[i], i)
    }
    return [];
};

console.log(twoSum([3,2,4], 6))

// End of Section 1


// Start of Section 2
// Heterogeneous Arrays
// - are Arrays that can have more than one type inside of arrays
// CASE 1:
let lightsaberStyles = [1, 2, "double", "shoto"];

const describe = (style: string | number) => {
  console.log(`Wield ${style} lightsaber`);
}

lightsaberStyles.map(describe);

// CASE 2: Interpolating array types in params
// the third parameter can be broken into two parts, that it is a union of a string and a number, and the
// second as an array, so essentially this means it is an array of a string or 
// a number.
export const interpolateComment = (
  id: number,
  comment: string,
  comments: (string | number)[],
) => {
  const index = comments.findIndex(c => c === id);
  if (index === -1) return;
  comments[index] = comment;
}
// NOTE! This CASE has a practical application in real projects, like making a comment editor app in react or vanilla js
// like using 
// End of Section 2

// Start of Section 3

// CASE 1: Rest Parameters
// Rest Parameters allow an indefinite number of final arguments, and brings them into the function body as an array.
// This means that arguments passed inside the function from which the moment the final arguments occur will be used in the function body as an array. They can be denoted by three dots(...) before the parameter name.

const gatherUtencilsSmartly = (drink: string, ...plates: string[]):string => {
  return `The Utencils are picked up, first the ${drink} cup, and then other plates are stacked from: ${plates.join(", ")}`;
}
// NOTE! so what it does is just that it takes the first argument for the drink parameter then the ...plates means take all the 'REST' indefinite argumets and consolidate them as an array. THIS IS ACTUALLY A FEATURE BUILT-INTO JAVASCRIPT
// NOTE this is quite useful if you have too many values being passed down and have to consider aggregating them to make the work easier.
const msg = gatherUtencilsSmartly("Coffee", "rosey", "silver", "and a brick");
console.log(msg);

const formatLabels = (...labels: string[]) => {
  if(labels.length === 0) return "No Labels";
  if(labels.length === 1) return `Label: ${labels[0]}`;
  return `Labels: ${labels.join(", ")}`;
}
const msg1 = formatLabels("Apple, Banana, AirForce1, Floormat, Door Knob");
console.log(msg1);

// End of Section 3


// Start of Section 4

// CASE 1: EVOLVING ARRAY
// If you create a new empty array, it infer it as any[]
/*
let inventory = []
// inventory: anyp[]

// If you push a typed value into it, TypeScript will infer the array as that type.
inventory.push(42);
// inventory: number[]

*/

let inventory = []
// inventory: anyp[]

// If you push a typed value into it, TypeScript will infer the array as that type.
inventory.push(42);
// inventory: number[]

console.log(typeof inventory);

export const collectSupportData = (id: number, resolved: boolean) => {
  const supportData = [];
  supportData.push("Support session started.");
  supportData.push(id);
  supportData.push(resolved);
  return supportData;
}
console.log(collectSupportData(3, true));

// End of Section 4

/*
  I've how arrays can be used as a type in typescript, and how I can also use the rest parameter(...label: string[]) which is also a feature in JavaScript
*/