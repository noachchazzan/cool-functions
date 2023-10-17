// ========================
// INTRO BY GRANDPA LINUS
// ========================
/*
Hey there, my brilliant granddaughter!

I've always been impressed by your intellect. Today, let's embark on a journey to dive deeper into the heart of JavaScript and uncover its magic. This adventure will take us through concepts, from the very basic to the quite intriguing, and by the end, I'm confident you'll have gained even more prowess in the world of coding. Let's jump right in!

*/

// ========================
// VARIABLES & DATA TYPES: The Building Blocks
// ========================
/*
In coding, as in life, everything starts with the basics. Variables are like boxes where you can store things for later. Let's unpack them.

A. Questions to ponder:
- How do we give a value to a variable?
- How can we change the content inside our variable-box?
- How can we share the content of one box with another?
- Declare, assign, and define...what's the difference?
- Why is planning (pseudocoding) before acting (coding) a smart move?
- When faced with a coding challenge, how should you divide your time between thinking and actually typing out the solution?

B. Strings and Variables
Strings are sequences of characters. They can be words, sentences, or even just a single letter.

TODO:
- Create a variable named 'firstVariable'.
- Store the phrase "Hello World" in it.
- Now, change its content to a number.
- Create another variable named 'secondVariable' and put the content of 'firstVariable' in it.
- Change 'secondVariable' to any phrase.
- Reflect: What's the content of 'firstVariable' now?

C. Booleans: True or False?
Booleans are like light switches, they can only be on (true) or off (false).

TODO:
- We have some variables and some conditions. Your task is to make all the conditions true.
*/
// C. 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false)
console.log(e || 'Kevin');
console.log(a || b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a && a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// B. 
let firstVariable = "Hello World";
firstVariable = 1; 
let secondVariable = firstVariable;
secondVariable = "any phrase";
console.log(firstVariable);
let myname = "Tevin Cameron Carter";
console.log("Hello my name is " + myname);
// TODO: Add and modify the code so that all the log statements print true.
console.log(typeof(firstVariable)==='number');
// ========================
// LOOPS: The Repetition Game
// ========================
/*
Sometimes in coding, we want to do the same thing many times. Loops are our friends in these situations.

A. Loop Basics:
TODO:
- Create a loop that shouts numbers from 0 to 10.
- Make another loop that counts from 10 to 400.
- Now, a loop that calls out every third number starting with 12 but not going over 4000.

B. Identifying Patterns:
TODO:
- Print numbers between 1 and 100.
- For even numbers, give them a label: "<-- This one's even!"

C. High Fives and Crowded Rooms:
TODO:
- Highlight numbers that are multiples of five.
- Identify numbers that are multiples of three.
- And sometimes, celebrate numbers that are both!

*/
for (let i = 1;i <= 100;i++) {
    if (i % 2 === 0)
    console.log("<-- This one's even!" + i);
}

// ========================
// ARRAYS & CONTROL FLOW: Organizing and Directing the Show
// ========================
/*
Arrays are like shelves where you can organize multiple items. Let's dig deeper.

A. Discuss:
- What are items in an array called?
- Does an array ensure items are always in order?
- Can you think of real-world things that can be represented using an array?

B. Building and Accessing:
TODO:
- Create an array of your favorite quotes.
- Given an array, how would you access the 1st item? What about the 3rd?

C. Modifying and Updating:
TODO:
- We have some arrays here. Your mission, should you choose to accept it, is to modify, update, and manipulate them.

*/
qoutes = ["live and let live","abc","qoute2"];
console.log(qoutes[0]);

/* D. The Farm
    Declare a variable animal. Set it to be "cow" or some other animal.
    Write code that will print out "mooooo" if the variable is equal to cow.
    Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not*/
let animal = "cow"; 
if (animal === 'cow')
console.log("mooooo")
