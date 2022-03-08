// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 1) {
        return base
    }
   return base * power(base, exponent - 1)
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

//pass a number into factorial
//we are gonna take that number and nultiply it by the decremented value of that number
//return factorial
//factorial of 0 is always 1

function factorial(num){
    if (num === 1 || num === 0) {
        return 1
    }
    return num * factorial(num-1)
   
}

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

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

//PSEUDOCODE
//pass a number into the function
//add that number by the decremented value of that number
//base case: if num is 0; return 0

function recursiveRange(num){
    if (num === 1) {
        return 1
    }
    return num + recursiveRange(num-1)
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55


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

//Write a recursive function called reverse which accepts a string and returns a new string in reverse

//PSEUDOCODE
//pass a string into the function
//create a container for the new string
//add the last charater of the inputted string to the newStr container
//return the new string

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

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

 console.log(isPalindrome('awesome')) // false
 console.log(isPalindrome('foobar')) // false
 console.log(isPalindrome('tacocat')) // true
 console.log(isPalindrome('amanaplanacanalpanama')) // true
 console.log(isPalindrome('amanaplanacanalpandemonium')) // false

//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise return false

function someRecursive(){
     // add whatever parameters you deem necessary - good luck!
    }

    // SAMPLE INPUT / OUTPUT
   // const isOdd = val => val % 2 !== 0;
   // someRecursive([1,2,3,4], isOdd) // true
   // someRecursive([4,6,8,9], isOdd) // true
   // someRecursive([4,6,8], isOdd) // false
   // someRecursive([4,6,8], val => val > 10); // false
