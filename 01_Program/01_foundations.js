"use strict"; // Prevents a variable is not declared.

console.log("Hello, World!");
console.log("1942");
console.log(1492);
console.log("name", "lastname", "age", "(100)");
console.log("name" + "lastname");

var name = "John";
let lastName = "Doe"; // let prevents re-declaration
const totalFingers = 10;

// scope examples
// let case
try {
    let height = 180;
    {
        let weight = 110;
        console.log("Height:", height);
        console.log("Weight:", weight);
    }
    console.log("Height outside block:", height);
    console.log("Weight outside block:", weight); // This will cause an error

} catch (error) {
    console.error("Error:", error.message);
}

// var case
var age = 50;
{
    var birthYear = 1970;
    console.log("Age:", age);
    console.log("Birth Year:", birthYear);
}
console.log("Age outside block:", age);
console.log("Birth Year outside block:", birthYear);