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

