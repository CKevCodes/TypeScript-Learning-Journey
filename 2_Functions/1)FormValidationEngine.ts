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
type ValidateAge = (email: string) => boolean;

type UserInput = {
    username: string;
    password: string;
    age: number;
}

type ValidationResult = {
    valid: boolean;
    errors: string[];
};



function validateUser(data: UserInput): ValidationResult {
    
    const errors: string[] = [];

    if(data.username.length < 3) {
        errors.push("")
    }

    if(data.password.length < 0 && data.password.length > 28) {
        errors.push
    }

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
            <label for="passwordID">password</label>
            <input type="password" id="passwordID">
        </div>
    </form>
`; */

