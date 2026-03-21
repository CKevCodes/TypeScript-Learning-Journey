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
var userData = {
    email: "eTag@gmail.com",
    password: "encrypted",
    age: 19,
    status: "active"
};
function validateUser(data) {
    var errors = [];
    if (data.username.length < 3) {
        errors.push("");
    }
    if (data.password.length < 0 && data.password.length > 28) {
        errors.push;
    }
    return {
        valid: errors.length === 0,
        errors: errors
    };
}
;
// Front-End
var app = document.getElementById("app");
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
`;