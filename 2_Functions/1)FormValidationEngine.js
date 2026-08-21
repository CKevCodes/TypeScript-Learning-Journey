"use strict";
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
let userData = {
    email: "eTag@gmail.com",
    password: "encrypted",
    age: 19,
    status: "active"
};
const validateEmail = (email) => {
    if (!/^\s\d{4}[.]\s.\s{4,5}$/.test(email)) {
        return false;
    }
    return true;
};
console.log(validateEmail("what@car.ajajs"));
function validateUser(data) {
    const errors = [];
    if (data.username.length < 5) {
        errors.push("Username must be at least 5 characters.");
    }
    if (data.password.length < 0 && data.password.length > 28) {
        errors.push("Password must not be empty or lower than 28");
    }
    if (data.age < 0)
        errors.push("Age is inconsistent");
    return {
        valid: errors.length === 0,
        errors: errors
    };
}
;
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
