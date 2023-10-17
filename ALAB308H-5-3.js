//Alright, let's provide a lesson that touches on the core concepts of "Pass by Value" and "Pass by Reference" with a touch of humor, keeping in mind the persona of Linus and his intelligent granddaughter.
// ========================
// INTRODUCTION BY GRANDPA LINUS
// ========================
/*
Hey there, kiddo!
I've seen you conquer challenges, from the complexities of life to the intricacies of your... let's say, 
"personal adventures". 😉 Now, I've got a challenge for you that's close to my heart: diving into the world of JavaScript and understanding some of its quirks. 
You're a smart cookie, so I know you'll get the hang of this: "Pass by Value" and "Pass by Reference". Let's get started!
*/
// ========================
// THE PLAYERS IN OUR DRAMA
// ========================
// Meet Timmy and Julie. Think of them as symbols representing data.
const personOne = {
    name: { first: 'Timmy', last: 'Timtim' },
    age: 30,
    location: { city: 'New York', state: 'New York', zip: 10001 }
};
const personTwo = {
    name: { first: 'Julie', last: 'July' },
    age: 28,
    location: { city: 'Albany', state: 'New York', zip: 12201 }
};
// ========================
// THE ART OF MOVING: moveLocation
// ========================
/* 
Much like in life, data sometimes needs to move and change. 
Let's create a function that lets our characters change their location. 
Your task: Craft a function named moveLocation().*/
const moveLocation = (person, nLocation) => {
    // TODO: Code the moveLocation function here.
    person.location.city = nLocation.city;
    person.location.zip = nLocation.zip;
    person.location.state = nLocation.state;
}; // 1. x 
// ========================
// SHARING MEMORIES: Living Together
// ========================
/*
Timmy and Julie are getting close, real close. So close that they want to share their memories 
(or locations). Let's make that connection.
Your task: Create a bond between Timmy and Julie's location. */
// TODO: Link their locations.
personTwo.location = personOne.location; // 2. x 
const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}
moveLocation(personTwo, nLoc);
nLoc.city = 'Buffalo';
nLoc.zip = 14201;
console.log(personTwo.location.city);
const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}
moveLocation(personOne, nLoc2);
console.log(personTwo.location.city);
// ========================
// A NEW BEGINNING: The Birth of personThree
// ======================l==
/*
After sharing so many memories, a new character emerges in our story. 
Let's introduce personThree. Your task: Define personThree with some unique attributes.*/
const personThree = {
    name: { first: "Sanad", last: `${personOne.name.last}-${personTwo.name.last}`},
    age: 0, 
    location: {...personOne.location} // gives own independent location via creation of a shallow copy. 
}; // 3. Add personThree
const dubaiLocation = {
    city: "Dubai",
    state: "Dubai",
    zip: "00000"
};
moveLocation(personOne, dubaiLocation);
console.log(personOne);
console.log(personTwo);
console.log(personThree);
// TODO: Introduce personThree.
// ========================
// FINDING ONE'S PATH: Independence
// ========================
/*
// As stories evolve, characters seek their own paths. 
// Help personThree find their own memories, distinct from the others.
// Your task: Let personThree chart their own course.
*/
// TODO: Help personThree find independence.
// ========================
// THE FUTURE: Cloning Era
// ========================
/*
// In this digital age, cloning isn't just sci-fi. 
// Let's duplicate our characters and see how they interact.
Your task: Design a  clonePerson() function.
*/
// TODO: Craft the cloning mechanism!
 const clonePerson = (person) => {
    return {
        ...person, 
        age: 0, 
        name: {...person.name},
        location: {...person.location}
    }; // This craetes a deep copy of a person but set to age 0
    // To address deep copies then nested objects are also copied via '...'
 };
// ========================
// CONNECTING SOULS: The Hive Mind
// ========================
/*
In a world where thoughts can be shared, let's link our characters in a web of shared memories.

Your task: Design a structure where memories (or thoughts) are shared.
*/

// TODO: Create the shared realm of thoughts.
const thoughts = {
    today: "I wonder what is for dinner."
};

personOne.thoughts = thoughts; 
personTwo.thoughts = thoughts; 
personThree.thoughts = thoughts; 

personThree.thoughts.today = "Challah sounds normal.";
console.log(personOne.thoughts.today);