// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  const maxOfThree = function(x,t,z) {
    let max = 0; 
    let arr = [x,t,z];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max; 
}
  console.log(maxOfThree(1090,999999,10000));

  // 3. 
function isCharAVowel(char)  {
    if (char.toLowerCase() == 'a' || char.toLowerCase() == 'e' || char.toLowerCase() == 'u' || char.toLowerCase()=='i' || char.toLowerCase()=='y' || char.toLowerCase()=='o') {
        return true;
    } else {
        return false; 
    }
}
console.log(isCharAVowel('e'));
console.log(isCharAVowel('w'));
console.log(isCharAVowel('A'));
console.log(isCharAVowel('r'));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(arr) {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i]
    }
    return sum;
}
let sum = sumArray([2,2,2,2,2,2]);
console.log(sum);

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  
function multiplyArray(arr) {
    let product = 1;
    for (let i in arr) {
        product *= arr[i];
    }
    return product;
}
console.log(multiplyArray([2,2,2]))

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function(...args) {
    return(args.length);
}
console.log(numArgs(1,2,3,4,5,6,7))

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));  // Outputs: "olleh"

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function(arrStr) {
    let maxStr = 0;
    for (let i in arrStr) {
        if (arrStr[i].length > maxStr) {
            maxStr = arrStr.length
        }
    }
    return maxStr;
}
console.log(longestStringInArray(["hello sanad", "hello","12345678", "12345678910","12","1"]));
// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strArr, num) {
    let arr = [];
    for (let i in strArr) {
        if (strArr[i].length > num) {
            arr.push(strArr[i])
        }
    }
    return arr; 
}
console.log(stringsLongerThan(["hello sanad", "hello","12345678", "12345678910","12","1"], 7));
// 10. Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).
const addList = function(...args) {
    let sum = 0;
    if (args.length == 0)
    return 0;
    for (let i in args){
        sum += args[i];
    }
    return sum;
}
console.log(addList(2,3,4,54,23,1,67,-1))
console.log(addList())