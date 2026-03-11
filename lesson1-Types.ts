
// a function expected to return a null
function callNull(): null {
    return null;
}

// a function that can return an undefined
function callUndefined(): number | undefined {
    let a:number = 5;
    let b:number = 10;
    const sum:number = a+b;
    return sum > 0 ? sum : undefined;
}

const callnull: null = callNull();
const twoTypes: number | undefined = callUndefined();
const addNum: number = 2+2;
const stringV: string = "23"+2;
const anyV: any = "etc";

console.log(callNull);
console.log(twoTypes);
console.log(addNum);
console.log(stringV);
console.log(anyV);

/*
    I've Learned that TypeScript is a super set of 
    JavaScript it adds extra feature that helps:
    -   Catch bugs and Errors at runtime allowing 
        TS to directly identify the root causes.
    -   Help read and maintain code
    -   Refactoring and Scaling is easy because 
        TypeScript allows you to deal with code 
        reliability early on.
*/