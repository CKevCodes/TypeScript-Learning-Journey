export type formInputs = (name: string, age: number, role?: string) => string;


export function sayHiToUser(name: string) {
    return `Hello ${name}, Welcome to PayPortal!`;
}

export function sayGoodbyeToUser(name: string) {
    return `You reap what you sought, ${name}. HAHA!`;
}