/*ALAB 308H.5.2 - Array Methods and Callbacks
    Callbacks
    Solve problems by referencing documentation when dealing with unfamiliar topics.

*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
/* Every
    Determine if every number is greater than or equal to 0.
    Determine if every word shorter than 8 characters. */

const everyNum = (nums) => {
    let narr = [];
    return nums.every()
};

/* For each of the Array methods below:
    The first statement is for the numbers array.
    The second statement is for the string array. */

/* Filter
    filter the array for numbers less than 4.
    Filter words that have an even length.*/

/* Find
    Find the first value divisible by 5.
    Find the first word that is longer than 5 characters.
*/

/* For Each
    Log each value of the array multiplied by 3.
    Log each word with an exclamation point at the end of it.
*/

/* Map
    Make a new array of each number multiplied by 100.
    Make a new array of all of the words in all uppercase.
*/

/* 
Some
    Find out if some numbers are divisible by 7.
    Find out if some words have the letter a in them.
*/

/*
Reduce
    Add all of the numbers in the array together using the reduce method.
    Concatenate all the words using reduce.
*/


//isPanagram

//Using the following array, test whether each letter a-z (case insensitive) is used at least once.
/*
Working with data: Using the array of objects below:
    Filter for products with a price that is less than 10.
    Sort alphabetically by product name.
*/

/* 
Find Index
    Find the index of the first number that is divisible by 3.
    Find the index of the first word that is less than 2 characters long.
*/

/*
Sort
    Try to sort without any arguments, do you get what you'd expect with the numbers array?
    Try to sort without any arguments, do you get what you'd expect with the words array?
    Sort the numbers in ascending order.
    Sort the numbers in descending order.
    Sort the words in ascending order.
    Sort the words in descending order.
*/
function sort0(x) {
    let arrn = x.sort();
    return arrn;
}
console.log(nums)
console.log(sort0(nums))

const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]