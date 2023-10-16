/* two types of functions. Function expressions and Function Declaration (AKA Function Definitions)
the difference between these two approaches is that function expressions cannot be invoked before they are defined; 
whereas function declarations are hoisted to the top of 
their scope and can therefore be invoked even if they are defined later in the source code.*/
fncDeclaration();
// function delcartion aka function definition 
function fncDeclaration(n) {
    console.log("I was declared and am hoisted.");
}

const fncExpression = function(x) {
    /*Note: Attempting to execute a function expression before it's been assigned 
    to its variable is the source of many an error for JS developers!*/
    console.log("I am a function expression and I am not hoisted.");
}
let aa = 45;
let b = 34;
// ES6 introduces arrow function as follows:
const add = (aa,b) => aa + b;
/* Arrow Functions offer:

A more concise syntax.
Implicit return of a single expression.
A single rule for binding the this keyword.*/

const fncDeclarationArrow =(n) => console.log("I was declared and I am not to be hoisted as an arrow function for I am still a function expression.");
/* Developer Vocab: Developers might say call, 
execute, invoke or "run a function" - they all 
mean the same thing.*/

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 & 2);
}

/* Note: In the real world, much of the code you write will be code
 designed prevent and handle error conditions. For example, in the areBothEven
  function above, it would be important to ensure that both of the inputs are numbers. 
  However, in this course, we will minimize the amount of error handling code so that we can focus
   more on what it is we're trying to teach. There just isn't enough time, so we must prioritize.
Now it's your turn...*/

function computeArea(width, height) {
    let area = width*height;
    console.log("The are of a ractangle with a wdth of " + width + " and a height of " + height + " is " + area + "square units.")
}
console.log("area of 7  and 7");
computeArea(7,7);
console.log("checks if telos 5, earth, MARS have water")
const planetHasWater = function(planet) {
    if (typeof planet !== 'string') {
        throw new Error('The provided value is not a string.');
    }
    if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars")
    return true;

    return false;

}
console.log("Telos 5: "+planetHasWater("Telos 5"));
console.log("earth: " + planetHasWater("earth"));
console.log("Mars water:" +planetHasWater("MARS"));
/*❓ How many different ways are there to define a function?
x 3 which are function defintions, function expressions and arrow functions.
❓ What's the only practical difference between a function definition and a function expression?
function expressions are hoisted */

function funcN(param1, param2, param3) {
    console.log("Note: Unlike some other programming languages, JavaScript won't complain if fewer or extra arguments are passed to a function. However, the function that depends on certain arguments to do its job might raise an error or return an unexpected result if it doesnt receive the proper arguments");
    console.log(param1, param2, param3);

}
let arg1 =  "3434";
let arg2 = 48;
let arg3 = "hello";
funcN(arg1, arg2, arg3);

let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
/* A non-arrow function can access all of its arguments using a "hidden" 
variable inside of the function named arguments.

arguments is an array-like JS object that has a length property 
and allows its values to be accessed via square bracket notation.*/
function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i]);
    }
    return {
        devName: name,
        jobSkills: skills
    };
}

/* Although the above function works, ES2015 delivered a better approach to working 
with extra arguments called Rest Parameters. Using rest parameters, the above function can be written as follows:*/

function getDevObject2(name, ...skills) {
    return {
        devName: name, 
        jobSkills: skills
    };
}// User rest vs arguments: 
/* The ...skills that is defined will be a true array 
(unlike arguments) holding any extra arguments provided to the function.


Prior to ES2015, here is trivial example of what we had to do:
*/
function setColor0(bicycle, color) {
	// set color to 'purple' if not provided
	bicycle.color = color || 'purple';
}
/*
const bike = new Bicycle();
setColor(bike, 'blue');  // sets color to blue
setColor(bike);  // sets color to purple by default
// Now, using default parameters, we can do this:

function setColor(bicycle, color = 'purple') {
	bicycle.color = color;
} */

// Any expression can be provided as a default, including objs, etc. 
// functions and data in js are all objects. So they can be passed as arguments. 

var a = ['red', 'green', 'blue'];

a.forEach(function(color) {
  console.log(color);
}); // this is an example of an anonymous function.

//One way we can prevent our code from leaking into the global scope is by wrapping it with a construct known as an 
//Immediately Invoked Function Expression, or "IIFE" (pronounced "iffy").

//It looks like this:

(function() {
	let arg1 = "new arg1 inside IIFE"
})();
function getDevObject2(name, id,...args) {
    let newObj = {
        name: name,
        id: id,
        data: args,
    }
    return newObj;
}
console.log(getDevObject2("Noach", 4534, ["software engineer", "male","sro", "jewish"]))

function defaultF(name="noach", id, ...args){
    let newObj = {
        name: name,
        id: id,
        data: args,
    }
    return newObj;
}
let y = 3434;
let x;
console.log(defaultF(x,y,[34,34,34,34,34]))









/*Hoisting
We mentioned that we can call function declarations before they are defined thanks to hoisting, but what is that and how does it work?
Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
A variable's declaration (but not its assignment), is hoisted to the top of the function when it's declared using var.
For example, when we write code like this: 

function hoist() {
	console.log(x);  // outputs undefined, not a ReferenceError
	var x = 25;
	console.log(x);  // outputs 25
}
// Internally, the JS engine actually sees this:

function hoist() {
	var x;
	console.log(x);  // outputs undefined, not a ReferenceError
	x = 25;
	console.log(x);  // outputs 25
}
// Note that the variable declaration is hoisted, but its assignment is not!

// let and const behave differently; try the same code with let instead of var:

function hoist() {
	console.log(x);  // outputs ReferenceError
	let x = 25;
	console.log(x);
}*/
/*
The reason for this difference is because "Hoisting" is not a universally agreed-upon term, nor is it defined in the ECMAScript specification, so hoisting actually refers to three separate groups of behaviors:
1. Being able to use a variables value in its scope before the line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
var is hoisted with type 2 behavior, whereas let, const, and class (which we will cover in a later lesson) are hoisted with type 3 behavior. To analyze what type 3 behavior really is, let's look 
at this block of code:
*/ 
// Function declarations can also be hoisted, and behave as type 1 describes! This is the most common usage of hoisting in JavaScript programming, and you will see it everywhere.

/* In JavaScript, all primitive data types are passed by value, which means that:

A copy of the original value is made in a new location in memory.
That new value is assigned to a new variable (in this case, the function-scoped myVar).
That new variable is independant of the old one. Any changes made to one will not be reflected in another.
The primitive data types, as a refresher, are:

string
number
bigint
boolean
undefined
symbol
null 
*/

let myVar = 20; 
function passBy(x) {
    x = x * 10;
}
let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];
function returnEven(array) {
    let newArray = [];
    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });
    return newArray;
}
let newArray = returnEven(numArray);
newArray[0].value += 10;
numArray[3].value = 67;
let myEvenValue = newArray[1].value;
myEvenValue /= 2;
// After the execution of this code (click each question for an explanation of its answer)...
/*
❓ What is the value of numArray[0].value?

❓ What is the value of newArray[3].value?

❓ What is the value of myEvenValue?

❓ What is the value of newArray[1].value?

As we can see, things get complicated when you nest non-primitive data types. Thankfully, there are a few ways of making this simpler.


/*Shallow Copies
*/

 const arr1 = [5, 10, 15, 20];
 const arr2 = [15, 88, 1, 5, 7];
 const arr3 = [1, 10, 15, 5, 20];
function intersection(...args) { 
    for (let i = 0; i < args[0][0].length;i++){
        if (args[0][i]){};
        console.log(args[0][i]);
    }
}
// Uncomment these to check your work!

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

const func1 = (a,b) => {
    a; 
    b; 
    return a + b;
};
func1(4,5);
console.log(func1(55,55))