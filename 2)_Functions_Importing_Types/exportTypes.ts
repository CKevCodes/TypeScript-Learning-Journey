export type name = string;
export type age = string;
export type salary = string;

export type ValidatePerson = (name: name, age: age, salary: salary) => string;

// export type alias of function MakeCar
export type MakeCar = (brand: string) => string;
