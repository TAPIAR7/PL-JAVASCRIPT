"use strict"; // Prevents a variable is not declared.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("----------------- console.log -----------------");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Hello, World!");
console.log("1942");
console.log(1492);
console.log("name", "lastname", "age", "(100)");
console.log("name" + "lastname");

var name = "John";
let lastName = "Doe"; // let prevents re-declaration
const totalFingers = 10;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n----------------- Scope -----------------");// scope examples
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let case
let height = 180;
{
    let weight = 110;
    console.log("Height:", height);
    console.log("Weight:", weight);
}
console.log("Height outside block:", height);
try {
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

// Example with counters to see if they update the values
let counter1 = 0;
{
    let counter2 = 0;
    console.log("Counter1:", counter1);
    console.log("Counter2:", counter2);
    counter1++;
    counter2++;
    console.log("Counter1 after increment:", counter1);
    console.log("Counter2 after increment:", counter2);
}
console.log("Counter1 outside block:", counter1);

try {
    console.log("Counter2 outside block:", counter2); // This will cause an error
} catch (error) {
    console.error("Error:", error.message);
}

// var case
var counter3 = 0;
{
    var counter4 = 0;
    console.log("Counter3:", counter3);
    console.log("Counter4:", counter4);
    counter3++;
    counter4++;
    console.log("Counter3 after increment:", counter3);
    console.log("Counter4 after increment:", counter4);
}
console.log("Counter3 outside block:", counter3);
console.log("Counter4 outside block:", counter4);
console.log("\n----------------- variable shodowing -----------------");// scope examples
let  counter  =  100;
console.log("before program block:", counter);  //  ->  100
{
     let  counter  =  200;
     console.log("inside program block:", counter);  //  ->  200
}
console.log("after program block:", counter);  //  ->  100

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n----------------- Data Types -----------------");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Type of 'Hello':", typeof "Hello");
console.log("Type of 42:", typeof 42);
console.log("Type of true:", typeof true);
console.log("Type of undefined:", typeof undefined);
console.log("Type of null:", typeof null);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n----------------- Functions -----------------");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function scope example of var
var  globalGreeting  =  "Good  ";

function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("globalGreeting inside function: ", globalGreeting);
         console.log("localGreeting inside function: ", localGreeting);
}
   
testFunction();
   
console.log("globalGreeting outside function: ", globalGreeting);
try {
    console.log("localGreeting outside function: ", localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
} catch (error) {
    console.error("Error:", error.message);
}


// Example of different ways to implement a function
function greet1() {
    console.log("Hello from greet1!");
}
const greet2 = function() {
    console.log("Hello from greet2!");
};
const greet3 = () => {
    console.log("Hello from greet3!");
};

greet1();
greet2();
greet3();

// Example of a function with parameters and return value
function add(a, b) {
    return a + b;
};
let sum = add(5, 10);
console.log("Sum of 5 and 10 is:", sum);

// Example of a function expression
const multiply = function(x, y) {
    return x * y;
};
let product = multiply(4, 6);
console.log("Product of 4 and 6 is:", product);

// Example of an arrow function
const divide = (m, n) => m / n;
let quotient = divide(20, 4);
console.log("Quotient of 20 and 4 is:", quotient);

// Example of a function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
};
let result = power(3);
console.log("3 to the power of 2 is:", result);
