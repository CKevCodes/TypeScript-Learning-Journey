/* 

1. Input Validation Library (Backend Classic)

What you'll learn:
- Typed functions
- Function composition
- Error handling
- Regex and JS string utilities

Project Idea:
Build a small validation utility similar to what backend APIs use before saving data.

Functions to implement:
- validateEmail(email: string): boolean
- validatePassword(password: string): boolean
- validateAge(age: number): boolean
- validateUser(data: UserInput): ValidationResult

Real backend insight:
Every API validates incoming data before inserting it into a database.

Stretch challenge:
-Create composable validators:
    composeValidators(...validators: Validator[]): Validator

- This introduces higher-order functions.

*/

type userObjType = { email: string, password: string, age: number, status: "active"|"paused"|"blocked" };

let userData: userObjType = {
    email: "eTag@gmail.com",
    password: "encrypted",
    age: 19,
    status: "active"
}

type EmailType = {};

type ValidateEmail = (email: string) => boolean;
type ValidatePassword = (password: string) => boolean;
type ValidateAge = (email: string | number) => boolean;

type UserInput = {
    username: string;
    password: string;
    email: string;
    age: number;
}

type ValidationResult = {
    valid: boolean;
    errors: string[];
};

const validateAge: ValidateAge = (age) => {
    const numericAge = Number(age);

  return Number.isInteger(numericAge) && numericAge >= 1 && numericAge <= 150;
}

console.log(validateAge(1));

const validateEmail: ValidateEmail = (email) => {
  return /^[A-za-z0-9._-]+@[A-za-z0-9]+\.[a-z]{2,8}$/.test(email);
}

// console.log(validateEmail("what@car.ajajs"));

const validatePassword: ValidatePassword = (password) => {
  // (?=...) means a test rule would be true if the regex is tested as valid.
  // . means that can exist anywhere in the regex
  // * means can be 0 or repeating occurence
  // {8,} means that it can have atleast 8 characters
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*._-])[A-Za-z\d!@#$%^&*._-]{8,}$/.test(password);
};
// console.log(validatePassword("@Auo123456")); // validatePassword
// console.log(validatePassword("Auo123456")); // validatePassword



function validateUser(data: UserInput): ValidationResult {
    
    const errors: string[] = [];

    if(data.username.length < 5) {
        errors.push("Username must be at least 5 characters.")
    }

    if(data.password.length < 0 && data.password.length > 28) {
        errors.push("Password must not be empty or lower than 28");
    }

    if(data.age < 0) errors.push("Age is inconsistent");

    return {
        valid: errors.length === 0,
        errors: errors
    }
};

// Front-End
/* const app = document.createElement("app");

app.innerHTML = `
    <form>
        <div class="input-grp">
            <label for="usernameID"">username</label>
            <input type="text" id="usernameID">
        </div>
        <div class="input-grp">
            <label for="ageID">Age</label>
            <input type="password" id="ageID">
        </div>
        <div class="input-grp">
            <label for="passwordID">password</label>
            <input type="password" id="passwordID">
        </div>
    </form>
`; */

