//-------------------------------------------------------------------QUESTION 1 ------------------------------------------------------------------------
//PSEUDOCODE
//pass a base and an exponent into a function
//Base Case: if exponent is 1, return that number
//Recursive Call: Multiply the base by the recursive function inputted with a decremented exponent

function power(base, exponent){
    if (exponent === 1) {
        return base
    }
    return base * power(base, exponent - 1)
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040


//-------------------------------------------------------------------QUESTION 2 ------------------------------------------------------------------------

//PSEUDOCODE
//pass a number into factorial
//we are gonna take that number and nultiply it by the decremented value of that number
//Base Case: factorial of 0/1 is always 1
//Recursive Call: return the number multiplied by factorial inputted with decremented number

function factorial(num){
    if (num === 1 || num === 0) {
        return 1
    }
    return num * factorial(num-1)
   
}

//-------------------------------------------------------------------QUESTION 3 ------------------------------------------------------------------------

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all


//PSEUDOCODE
// pass an array into the function
// take the first value of the array and multiply it by the first value of the sliced array.
//return product
//Base Case: if array.length is empty then return 1 since anything multipled by 1 is that number

function productOfArray(array) {
    if(array.length === 0) {
        return 1
    }
    return array[0] * productOfArray(array.slice(1))
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

//-------------------------------------------------------------------QUESTION 4 ------------------------------------------------------------------------


//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

//PSEUDOCODE
//pass a number into the function
//Base Case: if num is 1; return 1
//Recursive Call: add that number by the function inputted with the decremented value of that number

function recursiveRange(num){
    if (num === 1) {
        return 1
    }
    return num + recursiveRange(num-1)
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55

//-------------------------------------------------------------------QUESTION 5 ------------------------------------------------------------------------

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,.... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous numbers

//pass in a number
//take that number and add

function fib(num){
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
    // add whatever parameters you deem necessary - good luck!  
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

//-------------------------------------------------------------------QUESTION 6 ------------------------------------------------------------------------

//Write a recursive function called reverse which accepts a string and returns a new string in reverse

//PSEUDOCODE
//pass a string into the function
//create a container for the new string
//add the last charater of the inputted string to the newStr container
//Recursive Call: return the function inputted with the string sliced plus the first value of the string

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

//-------------------------------------------------------------------QUESTION 7 ------------------------------------------------------------------------

//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise return false.

//PSEUDOCODE
// pass a string into the function
//create a new string to contain a value
// set the new string equal to the reverse of the string passed in
//  if the values are the same, return true, else return false

const isPalindrome = str =>{
    let newStr = ""
    function helper(helperStr) {
        if(helperStr.length <= 1){
            return helperStr
        }
        newStr += helper(helperStr.slice(1)) + helperStr[0]
        return newStr
    }
    helper(str);
    if(newStr === str){
        return true
    }
    return false
}

//REFACTORED SOLUTION
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

 console.log(isPalindrome('awesome')) // false
 console.log(isPalindrome('foobar')) // false
 console.log(isPalindrome('tacocat')) // true
 console.log(isPalindrome('amanaplanacanalpanama')) // true
 console.log(isPalindrome('amanaplanacanalpandemonium')) // false

//-------------------------------------------------------------------QUESTION 8 ------------------------------------------------------------------------


//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise return false

//PSEUDOCODE
// pass the first value from the array into the callback function
// base: if callback returns a true value, then return true
// else recursively bring back the callback and split the array
// if there is no true value when the array length is 0, return false
// add an edge case that if it returns undefined, also return false


const isOdd =  val => val % 2 !== 0;

function someRecursive(array, callback){
    callback(array[0]);
    if(array.length === 0 || callback(array[0] === undefined)) {
        return false
    }
    if(callback(array[0]) === true){
        return true
    }
    return someRecursive(array.slice(1), callback)
}

//REFACTORED SOLUTION
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

//-------------------------------------------------------------------QUESTION 9 ------------------------------------------------------------------------

//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

//PSEUDOCODE
//Create a variable called newArr to hold the new array
//Push the shifted value of the passed in array to the new array
//if we land on a nested array, we push the first value of the nested array into the new array
//Base Case: if array.length is 0 return the newArr
//Recursive Call: 

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
        } else {
                newArr.push(oldArr[i])
        }
    } 
    return newArr;
}
console.log( flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log( flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log( flatten([[1],[2],[3]])) // [1,2,3]
console.log( flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3