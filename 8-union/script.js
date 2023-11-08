var code;
code = 123; // OK
console.log(code);
code = "ABC"; // OK
console.log(code);
code = false; // Compiler Error
console.log(code);
var empId;
empId = 111; // OK
console.log(empId);
empId = "E111"; // OK
console.log(empId);
empId = true; // Compiler Error
console.log(empId);
function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number.');
    else if (typeof (code) === "string")
        console.log('Code is string.');
}
displayType(123); // Output: Code is number.
console.log(displayType(123));
displayType("ABC");
console.log(displayType("ABC")); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
console.log(displayType(true));
